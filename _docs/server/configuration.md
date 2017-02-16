---
layout: documentation
title: Configuration
description: Add your description here
category: Server
order: 2.2
---

# Configuration

This part of the documentation will focus on the configuration of the server. Start by locating the `config.js` file in the `lounge` folder.

To quickly open the config:

```shell
$ lounge config
```

## public

This setting can be either `true` or `false`. Public servers require
no authentication.
This is the default mode. Set to `false` to enable user login.

Example:

```javascript
public: true,
```

## host

Listen to connections only from this host. Default `undefined` will allow
connections from anyone (similar to `0.0.0.0`).

Examples:

```javascript
host: "127.0.0.1",
host: undefined,
```

## port

The port to listen on. Default to `9000`.

You can override this setting by starting The Lounge like this:  
`lounge start -- --port 80`

Example:

```javascript
port: 80,
```

## bind

Local IP to use for outgoing connection. Default to undefined.

Example:

```javascript
bind: "192.168.0.1",
bind: undefined,
```

## reverseProxy

This setting allow you to specify if the server is behind a reverse proxy.
Default to `false`.

Example:

```javascript
reverseProxy: false,
```

## theme

This setting should point to a stylesheet in your `lounge` folder.
If you want to create your own theme, it's recommended that you add
your own stylesheet to `lounge/client/themes/`.

Example:

```javascript
theme: "themes/example.css",
```

The Lounge ships with 4 themes.

[![Example Theme][example_thumb]][example]
[![Crypto Theme][crypto_thumb]][crypto]

[![Morning Theme][morning_thumb]][morning]
[![Zenburn Theme][zenburn_thumb]][zenburn]

[example]: /img/screenshots/example_css.png
[example_thumb]: /img/screenshots/example_thumbnail.png (Example CSS)
[crypto]: /img/screenshots/crypto_css.png
[crypto_thumb]: /img/screenshots/crypto_thumbnail.png (Crypto CSS)
[morning]: /img/screenshots/morning_css.png
[morning_thumb]: /img/screenshots/morning_thumbnail.png (Morning CSS)
[zenburn]: /img/screenshots/zenburn_css.png
[zenburn_thumb]: /img/screenshots/zenburn_thumbnail.png (Zenburn CSS)

## prefetch

This settings allows loading of user posted elements like thumbnails
and site description from URLs posted in channels. Default to `false`

Example:

```javascript
prefetch: true,
```

## prefetchStorage

This setting requires `prefetch` to be enabled. Store and proxy prefetched images and thumbnails.  
This improves security and privacy by not exposing client IP address, and always loading images from The Lounge instance and making all assets secure, which in result fixes mixed content warnings.  
If storage is enabled, The Lounge will fetch and store images and thumbnails in the `${LOUNGE_HOME}/storage` folder.  
Images are deleted when they are no longer referenced by any message (controlled by maxHistory), and the folder is cleaned up on every The Lounge restart. Default to `false`

Example:

```javascript
prefetchStorage: true,
```

## prefetchMaxImageSize

This setting requires `prefetch` to be enabled. It fixes the
maximum size for the content to be displayed. Default to `512` (kB).

Example:

```javascript
prefetchMaxImageSize: 1024,
```

## displayNetwork

Allows the display of the network settings in the login form.
Default to `true`.

Example:

```javascript
displayNetwork: false,
```

## lockNetwork

This setting lock changes on the network settings and prevent
users from adding new networks. Default to `false`.

Example:

```javascript
lockNetwork: false,
```

## webirc

Used for the WEBIRC support in The Lounge. Default to `null`.
The Lounge then sends the connecting user's host and IP to the IRC server.
This requires to have a password from the IRC network used.

## logs

Change how the logs will be stored. Remember that logging has to be
turned on per user, in their own `user.json`.

- format
- timezone

Example:

```javascript
logs: {
	format: "YYYY_MM_DD HHmmss",
	timezone: "UTC+02:00"
},
```

## maxHistory

Defines the maximum number of history lines that will be kept in
memory per channel/query, in order to reduce the memory usage of
the server. Setting this to -1 will keep unlimited amount.
Default to `10000`.

Example:

```javascript
maxHistory: 1000,
```

## defaults

These are the placeholder values displayed in the __Connect__ form:

- name
- host
- port
- password
- tls
- nick
- realname
- join

Example (for Freenode network):

```javascript
defaults: {
	name: "Freenode",
	host: "chat.freenode.net",
	port: 6697,
	password: "",
	tls: true,
	nick: "lounge-user",
	username: "lounge-user",
	realname: "The Lounge User",
	join: "#thelounge"
},
```

## transports

This setting is for the socket.io transport. Default to `["polling", "websocket"]`

Example:

```javascript
transports: ["polling", "websocket"],
```

## https

These three settings are used to setup SSL on the server side.

- enable
- key
- certificate

Example

```javascript
https: {
	enable: true,
	key: "/path/to/my/certs/key.pem",
	certificate: "/path/to/my/certs/fullchainpluscert.pem"
},
```

## identd

This setting enables the identd support of The Lounge.

- enable
- port

Example:

```javascript
identd: {
	enable: true,
	port: 113
},
```

## oidentd

This setting enables the support of oidentd through a specific file. Default to `null`.

Example:

```javascript
oidentd: "~/.oidentd.conf",
```

## ldap

LDAP authentication settings. This settings are used only when public is set to `false`.

- enable
- url
- baseDN
- primaryKey

Example:

```javascript
ldap: {
	enable: true,
	url: "ldaps://example.com",
	baseDN: "ou=accounts,dc=example,dc=com",
	primaryKey: "uid"
},
```

## debug

This settings gives extra output information for debug purposes. Default to `false`.

Example:

```javascript
debug: true,
```
