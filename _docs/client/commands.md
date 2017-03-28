---
layout: documentation
title: Commands
category: Client
order: 3.1
---

# Commands

<div class="alert alert-danger" role="alert">
  <strong>As of The Lounge v2.2.2, information presented below has been moved to the Help section of the application. This page will be removed soon.</strong>
</div>

The Lounge implements most of the IRC commands you may be familiar with. Here's a list of commands you can use:

## /away

Mark yourself as away and set your away message. If you omit the message, an empty one is used.

Example: `/away Making quiche`

## /back

Remove your away status (after `/away [<message>]`).

Example: `/back`

## /clear

Clear the current screen.

Example: `/clear`

## /close

Close the current window.

Example: `/close`

Aliases:

-   [/leave](#leave)
-   [/part](#part)

## /connect

Connect to a new network.

Example: `/connect irc.freenode.org`

Aliases:

-   [/server](#server)

## /deop

Remove op (-o) from a user in the current channel.

Example: `/deop john`

## /devoice

Remove voice (-v) from a user in the current channel.

Example: `/devoice john`

## /disconnect

Disconnect from the current network.

Example: `/disconnect`

## /invite

Invite a user to the specified channel.

Example: `/invite john #chan`

## /join

Join a channel.

Example: `/join #chan`

## /kick

Kick a user from the specified channel.

Example: `/kick john`

## /leave

Leave the current channel or query.

Example: `/leave`

Aliases:

-   [/close](#close)
-   [/part](#part)

## /me

Send an `ACTION` message to the current channel.

Example: `/me likes chocolate`

## /mode

Set the user mode in the current channel.

Example: `/mode +o john`

## /msg

Send a message to the specified channel.

Example: `/msg #chan Hello!`

## /nick

Change your nickname on the current network.

Example: `/nick john`

## /notice

Sends a notice message to the specified user.

Example: `/notice john Hello!`

## /op

Make user op (+o) in the current channel.

Example: `/op john`

## /part

Leave the current channel.

Example: `/part`

## /query

Send a private message to the specified user.

Example: `/query john Hello!`

## /quit

Disconnect from the current network.

Example: `/quit`

## /quote

Example: `/quote`

Aliases:

-   [/raw](#raw)
-   [/send](#send)

## /raw

Send a raw message to the current IRC network.

Example: `/raw`

Aliases:

-   [/quote](#quote)
-   [/send](#send)

## /say

Send a message to the current channel.

Example: `/say Hello!`

## /send

Example: `/send`

Aliases:

-   [/quote](#quote)
-   [/raw](#raw)

## /server

Connect to a new network.

Example: `/server irc.freenode.org`

Aliases:

-   [/connect](#connect)

## /slap

Slap someone in the current channel. With a trout!

Example: `/slap john`

## /topic

Set the topic in the current channel.

Example: `/topic Hello!`

## /voice

Give a user voice (+v) in the current channel.

Example: `/voice john`

## /whois

Whois a user on the current network.

Example: `/whois john`
