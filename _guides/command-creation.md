---
layout: documentation
title: Create a custom command
description: Customize The Lounge using built-in custom command support
---

This guide assumes you have setup your own plugin already. If you don't know how to do that, check out [this guide](/docs/plugin-creation)

The Lounge exposes an easy way to register your own commands, all you need to do is call the api in your `onServerStart` method like this:

```js
module.exports = {
    onServerStart: thelounge => {
        thelounge.Commands.add("testcommand", testCommand);
    },
};
```

where `testCommand` is an object that defines an input field with the command function:
```js
const testCommand = {
    input: function (client, target, command, args) {
        // command logic
    }
};
```
- `client` is the public client api of The Lounge
- `target` is an object that wraps the channel and the network the command was enteres in, access them via `target.chan` or `target.network`
- `command` is the command string that was entered
- and `args` is an array of strings that followed the command string

Optionally, you can add `allowDisconnected: true` to your command to be able to run the command while not being connected to an irc network:
```js
const testCommand = {
    input: function (client, target, command, args) {
        // command logic
    },
    allowDisconnected: true
};
```
