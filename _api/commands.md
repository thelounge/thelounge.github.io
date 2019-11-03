---
layout: documentation
title: Commands
description: The Command API lets you add new commands.
type: server
---

The Command API lets you add new commands.

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

Arguments:

**`client: PublicClient`**
: The client API

**`target: Object`**
: `target.network` is the network this command was run in, `target.chan` the corresponding channel.

**`command: String`**
: The command name (lowercase).

**`args: Array of String`**
: The arguments the command was executed with.
