---
layout: documentation
title: Public Client
description: The Public Client API lets you interact with the client
type: server
---

The Public Client API lets you interact with the client

## Methods

### `#runAsUser(command: String, targetId: String)`

Allows to make the client send a message/run a command.

Arguments:

**`command: String`**
: IRC command to run, this is in the same format that a client would send to the server (eg: JOIN #test).

**`targetId: String`**
: The id of the channel to simulate the command coming from. Replies will go to this channel if appropriate

### `#createChannel(attributes: Object)`

Allows to create a new channel.

Attributes:

**`id: Number`**
: The id of the channel, defaults to 0.

**`messages: Array of Msg`**
: The messages of the channel, defaults to empty array.

**`name: String`**
: The name of the channel, defaults to empty string.

**`key: String`**
: The key of the channel, defaults to empty string.

**`topic: String`**
: The topic of the channel, defaults to empty string.

**`type: Chan.Type`**
: The type of the channel, defaults to `CHANNEL`. Available types: `CHANNEL`, `LOBBY`, `QUERY`, `SPECIAL`. 
Special is used for banlist, invitelist, channellist or ignorelist.

**`state: Chan.State`**
: The state of the channel, defaults to `PARTED`, Possible states: `PARTED`, `JOINED`.

**`firstUnread: Number`**
: The first unread message, defaults to 0.

**`unread: Number`**
: The number of unread messages, defaults to 0.

**`highlight: Number`**
: The number of highlights, defaults to 0.

**`users: Map from String to User`**
: The users of the channel, key is the lowercase nick, the value is the user object. Defaults to empty map.

### `#sendToBrowser(event: String, data: Object)`

Emits an `event` to the browser client, with `data` in the body of the event.

Arguments:

**`event: String`**
: Name of the event, must be something the browser will recognise.

**`data: Object`**
: Body of the event, can be anything, but will need to be properly interpreted by the client.

### `#getChannel(channelId: Number)`

Looks up a channel by ID.

Arguments:

**`channelId: Number`**
: The id of the channel to return.

### `#sendMessage(text: String, chan: Chan)`

Sends a message to this client, displayed in the given channel.  
This message will be displayed as a plugin message, the sender will be the name of your plugin (define in your package.json under thelounge.name) and defaults to the package name.

Arguments:

**`text: String`**
: The content of the message.

**`chan: Chan`**
: The channel to send this message into.
