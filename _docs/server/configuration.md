---
layout: documentation
title: Configuration
description: Add your description here
category: Server
order: 2.1
---

# Configuration

This part of the documentation will focus on the configuration of the server. Start by locating the `config.js` file in the `lounge` folder.

To quickly open the config:

```
$ lounge config
```

## public

This setting can be either `true` or `false`. Public servers require no authentication. This is the default mode. Set to `false` to enable user login.

## host

Listen to connections only from this host. Default `0.0.0.0` will allow connections from anyone.

## port

The port to listen on.

You can override this setting by starting The Lounge like this:  
`lounge start --port 80`

## theme

This setting should point to a stylesheet in your `lounge` folder. If you want to create your own theme, it's recommended that you add your own stylesheet to `lounge/client/themes/`.

## home

Use this setting to override the default `HOME` location. The home folder is where The Lounge will locate the `users/` and `cache/` folder. Leaving this field empty will default to `~/.lounge/`.

## logs

Change how the logs will be stored. Remember that logging has to be turned on per user, in their own `user.json`.

- format
- timezone

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
