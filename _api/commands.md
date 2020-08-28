---
layout: documentation
title: Commands
description: The Command API lets you add new commands.
type: server
---

The Command API lets you add new commands.

## Methods

### `#add(commandText: string, command: Object)`

Registers a new command for users on the lounge.

`commandText` is what the users will type after `/`, and command is the command object.

Attributes of command:

**`input: Function`**
: The implementation of the command, see the arguments below:

**`allowDisconnected: Boolean`**
: If `true` this command can be execute when the client isn't connected.

## Arguments of a command:

**`client: PublicClient`**
: The client API

**`target: Object`**
: `target.network` is the network this command was run in, `target.chan` the corresponding channel.

**`command: String`**
: The command name (lowercase).

**`args: Array of String`**
: The arguments the command was executed with.

## Example

```js
const helloWorldCommand = {
    input: function (client, target, command, args) {
        if(args.length === 0) {
            client.sendMessage("Hello World", target.chan);
        } else {
            client.sendMessage("Hello " + args[0], target.chan);
        }
    },
    allowDisconnected: true
};
module.exports = {
    onServerStart: api => {
        api.Commands.add("helloworld", helloWorldCommand);
    },
};
```