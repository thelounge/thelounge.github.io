---
layout: documentation
title: How to proxy The Lounge behind common web servers
---

Serving The Lounge through a reverse proxy instead of the built-in HTTP server
comes with a few benefits:

- The Lounge needs to run as root in order to serve it on port 80 (or 443 for
  HTTPS), or you must always type the port number as part of the URL. Reverse
  proxies usually abstract this, take control of ports 80 and 443, then redirect
  traffic to The Lounge.

- If the built-in HTTP server is already listening to port 80 or 443, this means
  that your server cannot serve any other project through these ports. Reverse
  proxies act as "gates" that route traffic from ports 80 and 443 to the
  requested service.

- While The Lounge comes with HTTPS support out of the box, any changes to the
  HTTPS certificates (such as renewing them) requires a server restart. Using a
  reverse proxy lets you reload the reverse proxy without having to restart The
  Lounge.

- When serving a website with HTTPS, it is common to also serve an HTTP
  counterpart that redirects to the HTTPS version. This is not possible with the
  built-in server that listens to a single port. It is usually trivial to do so
  with reverse proxies.

It however requires more configuration than just relying on the built-in server,
so this guide helps going through the extra complexity.

When using The Lounge behind a reverse proxy, set the `reverseProxy` option to
`true` in your configuration file. This will instruct The Lounge to use the
`X-Forwarded-For` header passed by your reverse proxy.

This document assumes that your configuration of The Lounge binds to host
`127.0.0.1` and port `9000`.

## [Nginx](https://nginx.org/en/)

This makes The Lounge available at `https://example.com/irc/`:

```nginx
location /irc/ {
	proxy_pass http://127.0.0.1:9000/;
	proxy_http_version 1.1;
	proxy_set_header Connection "upgrade";
	proxy_set_header Upgrade $http_upgrade;
	proxy_set_header X-Forwarded-For $remote_addr;

	# by default nginx times out connections in one minute
	proxy_read_timeout 1d;
}
```

## [Apache](https://httpd.apache.org/)

Enable the necessary modules `a2enmod rewrite`, `a2enmod proxy`, and
`a2enmod proxy_wstunnel`.

This makes The Lounge available at `https://example.com/irc/`:

```apache
RewriteEngine On
RewriteCond %{REQUEST_URI}  ^/irc/socket.io        [NC]
RewriteCond %{QUERY_STRING} transport=websocket    [NC]
RewriteRule /irc/(.*)       ws://127.0.0.1:9000/$1 [P,L]

ProxyVia On
ProxyRequests Off
ProxyPass /irc/ http://127.0.0.1:9000/
ProxyPassReverse /irc/ http://127.0.0.1:9000/
ProxyPreserveHost on

# By default Apache times out connections after one minute
ProxyTimeout 86400 # 1 day
```

## [Caddy](https://caddyserver.com/)

This makes The Lounge available at `https://example.com/irc/`:

```
proxy /irc/ http://127.0.0.1:9000 {
	header_upstream X-Forwarded-For {remote}
	without /irc/
	websocket
}
```

## [HAProxy](http://www.haproxy.org/)

This makes The Lounge available at https://thelounge.example.com:

```
frontend  main
	bind *:1000
	acl thelounge_site   hdr(host)  thelounge.example.com
	use_backend thelounge       if thelounge_site

backend thelounge
	server thelounge 127.0.0.1:9000
```

## [Cloudflare](https://www.cloudflare.com/)

The following page rules need to be added in order to use Cloudflare DNS with
The Lounge:

```
Rocket Loader = off
Browser Cache TTL = 4 hours
Disable Apps
```

## HTTPS with [redbird](https://www.npmjs.com/package/redbird) and [Let's Encrypt](https://letsencrypt.org/)

First, install redbird:

```sh
npm install redbird
```

Then, create a `proxy.js` file and edit it with:

```js
const redbird = require("redbird")({
	port: 80, // Port to listen HTTP connections
	letsencrypt: {
		path: __dirname + "/certs/", // Certificates will be saved, updated and archived there
	},
	ssl: {
		port: 443, // Port to listen HTTPS connections
	},
});

redbird.register("example.com", "http://127.0.0.1:9000", {
	ssl: {
		letsencrypt: {
			email: "mail@example.com", // Must be a host with MX record
			production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
		}
	}
});
```

You can then run it with `node proxy.js`. The Lounge should then be available at
`https://example.com/`.
