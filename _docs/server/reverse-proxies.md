---
layout: documentation
title: Reverse Proxies
description: Reverse proxies and The Lounge
category: Server
order: 2.3
---

# Reverse Proxies

This makes _The Lounge_ available under https://example.com/irc/.  
Your installation of _The Lounge_ must be configured to bind to host `127.0.0.1`, port `9000`.

You must also enable `reverseProxy` option to use the correct header passed from the front end server using the `X-Forwarded-For` header.

## nginx

Here is a configuration for nginx as a reverse proxy for _The Lounge_:

```nginx
location /irc/ {
	proxy_pass http://localhost:9000/;
	proxy_http_version 1.1;
	proxy_set_header Connection "upgrade";
	proxy_set_header Upgrade $http_upgrade;
	proxy_set_header X-Forwarded-For $remote_addr;

	# by default nginx times out connections in one minute
	proxy_read_timeout 1d;
}
```

## Apache

```apache
RewriteEngine On
RewriteCond %{REQUEST_URI}  ^/irc/socket.io        [NC]
RewriteCond %{QUERY_STRING} transport=websocket    [NC]
RewriteRule /(.*)           ws://localhost:9000/$1 [P,L]

ProxyVia On
ProxyRequests Off
ProxyPass /irc/ http://localhost:9000/
ProxyPassReverse /irc/ http://localhost:9000/
ProxyPreserveHost on

# by default apache times out connections in one minute
ProxyTimeout 86400
```

## Caddy

```
proxy /irc/ http://localhost:9000 {
	proxy_header X-Forwarded-For {remote}
	without /irc/
	websocket
}
```

## HAProxy

This makes _The Lounge_ available under https://thelounge.example.com.

```
frontend  main
    bind *:1000
    acl thelounge_site   hdr(host)  thelounge.example.com
    use_backend thelounge       if thelounge_site

backend thelounge
    server      thelounge 127.0.0.1:9000
```
