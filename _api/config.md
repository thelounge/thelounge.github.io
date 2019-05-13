---
layout: documentation
title: Config
description: The Config API lets you access the server's currently running config.
type: server
---

The Server Config API lets you access the server's currently running config. 

This can be useful for changing your plugin's functionality based on the configuration, or changing the configuration for the currently running instance.
Note, if you change anything in the config object, this will be thrown away on server restart. It will not be persisted to the config file.

## Methods

### `#getConfig()`

Returns the server's current configuration object.

#### Example

```js
module.exports = {
  onServerStart(thelounge) {
    const config = thelounge.Config.getConfig();
  }
};
```
