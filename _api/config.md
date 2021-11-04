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

### `#getPersistentStorageDir()`

Returns the pathname a plugin may use to store persistent files (say databases, images or similar things
which are considered state).

#### Example

```js
module.exports = {
  onServerStart(thelounge) {
    const config = thelounge.Config.getConfig();
  }

  const db = {theAnswer: 42}
  db_path = path.join(thelounge.Config.getPersistentStorageDir(), "db.json");
  fs.writeFile(db_path, JSON.stringify(db))
};
```
