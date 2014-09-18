---
layout: documentation
title: Configuration
description: Add your description here
category: Server
order: 2.1
---

# Configuration

This part of the documentation will focus on the configuration of your Shout server. Start by locating the `config.js` file in the Shout folder.

To quickly open the config:

```
shout config
```

## public

This setting can be either `true` or `false`. Public servers require no authentication. This is the default mode. Set to `false` to enable user login.

## host

Listen to connections only from this host. Default `0.0.0.0` will allow connections from anyone.

## port

The port to listen on.

You can override this setting by starting Shout like this:
`shout start --port 80`

## theme

This setting should point to a stylesheet in your Shout folder. If you want to create your own theme, it's recommended that you add your own stylesheet to `shout/client/themes/`.

## home

Use this setting to override the default `HOME` location. The home folder is where Shout will locate the `users/` and `cache/` folder. Leaving this field empty will default to `~/.shout/`.

## logs

Change how the logs will be stored. Remember that logging has to be turned on per user, in their own `user.json`.

- format
- timezone


## defaults

These are the placeholder values displayed in the `Connect` form:

- name
- host
- port
- password
- tls
- nick
- realname
- join
