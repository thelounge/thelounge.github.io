---
layout: documentation
title: Set up ZNC with The Lounge
description: Extend the server capabilities of The Lounge using ZNC and its modules
---

## Why you may not need ZNC

The Lounge already gives you most of the features you expect from a bouncer:

- Scrollback is already available from within The Lounge, even across restarts, [if message storage is configured](/docs/configuration#messagestorage).
- Multiple devices can connect to The Lounge at the same time, using The Lounge as a client.
- The Lounge keeps a persistent connection to the IRC server even if you don't have the client open anywhere.
- Push notifications are available if they are supported by your platform and browser.

## Set up ZNC

If you still like to have the additional benefits ZNC gives you, install ZNC according to the [installation instructions](https://wiki.ZNC.in/Installation) for your system.

In order for ZNC to properly integrate with The Lounge (and other clients), you may want to use the [clientbuffer module](https://wiki.znc.in/Clientbuffer). The client buffer module maintains client specific buffers for identified clients. This works with any client even when they are not ZNC aware.

## Connect to multiple networks

For each IRC server connected through ZNC, you will need a separate IRC server connection in The Lounge.
This is a limitation of the IRC protocol and cannot be solved by ZNC.

In order to connect, you will need to specify the server you want to use in the username field.

Within the server settings of The Lounge directly:

- Username: `zncUser/network`
- Password: `zncPassword`

Or if you are using the Clientbuffer module:

- Username: `zncUser@clientid/network`
- Password: `zncPassword`
