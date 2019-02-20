---
layout: documentation
title: Set up ZNC with The Lounge
---

## Why you may not need znc
The Lounge already gives you most of the features you expect from a bouncer:

- Scroll back is already available from within The Lounge, even across restarts, if logging to sqlite is enabled

- Multiple devices can connect to The Lounge at the same time, using The Lounge as a client

- Nick, mode changes etc. are kept, as The Lounge never disconnects from the IRC server

- Push notifications are available on Android and on modern browsers

## Setting up ZNC
If you still like to have the additional benefits ZNC gives you, install ZNC according to the [installation instructions](https://wiki.ZNC.in/Installation) for your system.

In order for The Lounge to properly integrate with The Lounge (and other clients) you probably want either one of the following modules:

 - [Clientbuffer](https://wiki.znc.in/Clientbuffer): The client buffer module maintains client specific buffers for identified clients. Works with any client even when they are not znc aware

 - [Playback](https://wiki.znc.in/Playback): IRC clients may request the module to send a partial buffer playback starting from and ending to a certain point of time. Only works with clients that respect the znc specific capability. The Lounge supports this functionality out of the box

## Connect to multiple Networks from The Lounge
For each IRC server connected from ZNC, you will need a separate irc server connection from within The Lounge.
This is a limitation of the IRC protocol and can't be fixed by ZNC.

In order to connect, you will need to specify the server you want to use in the username field.

In essence from within the The Lounge server settings:
 - Username: zncUser/network
 - Password: zncPassword

Or if you are using the Clientbuffer module:
 - Username: zncUser@clientid/network
 - Password: zncPassword
