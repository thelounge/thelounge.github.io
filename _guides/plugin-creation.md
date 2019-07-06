---
layout: documentation
title: Create a custom plugin
description: Customize The Lounge using built-in plugin support, and share plugins with others
---

Plugins for The Lounge are npm packages hosted on [the npm registry](https://www.npmjs.com).
The work similarly to themes. A theme is a plugin but not every plugin is a theme.

In a directory named after your new plugin (for example, `thelounge-plugin-foo`), start by creating a new package with the following command:

```
yarn init -y
```

This will create a `package.json` file that you must edit as such:

- Make sure `"name"` is the name of your package, `"thelounge-plugin-foo"`
- Change the value of `"main"` to be `"package.json"`
- Add a `"keywords"` to make sure your plugin is discoverable:
  ```json
  "keywords": [
    "thelounge",
    "thelounge-plugin"
  ]
  ```
- Add a `"thelounge"` section with required metadata. `"name"` is the display name that will appear in the client settings:
  ```json
  "thelounge": {
    "name": "Plugin Name",
    "type": "plugin"
  },
  ```
- Reference your main javascript file:
  ```json
  "main": "index.js",
  ```
- Add a dependency on `"thelounge"`
  ```json
  "dependencies": {
    "thelounge": "3.0.1"
  }
  ```
Although it is not required, we strongly recommend you also fill in the `"homepage"`, `"repository"`, and `"bugs"` sections.

You can then place all your plugin code in your `index.js`.

The Lounge defines an entry point for plugins, you can use it like this:
```js
module.exports = {
    onServerStart: api => {
        // do stuff with api
    },
};
```
Refer to [the API reference](/docs/api) to learn what you can do or start implementing your own custom command with 
[the custom command guide](/guides/command-creation).

## Helpful things for plugin developers

Here follows a helpful list of things that might be of use to plugin developers:

* You can import and use methods from The Lounge via node's `require` like this `const Msg = require("thelounge/src/models/msg");`
* You can send a message to a channel like this: 
  ```js
  chan.pushMessage(client.client, new Msg({
          type: Msg.Type.ERROR,
          text: "Hello World",
  }));
  ```
  where `chan` is the channel (`target.chan` if you are in a command) and `client` the public client.
  
## Installing a plugin locally

The Lounge currently doesn't allow you to install a plugin from source, thats why we have to do it manually.

For that we have to add our plugin as a new package in the THELOUNGE_HOME/packages dir.
For that you need to have a package.json in that packages dir that looks kinda like this:
```json
{
    "private": true,
    "description": "Packages for The Lounge. All packages in node_modules directory will be automatically loaded.",
    "dependencies": {
        "thelounge-plugin-foo": "1.0.1"
     }
}
```
the important thing is the name here.

You then need to create a folder with that name in the `node_modules` sub dir.
We then need to place our index.js and package.json in that dir. 
You can do that manually by just copy pasting it, but that would involve copy pasting it for every change.
I would recommend symlinking the files from the project into the packages folder, kinda like this:
```
ln package.json thelounge-home/packages/node_modules/thelounge-plugin-foo/package.json
ln index.js thelounge-home/packages/node_modules/thelounge-plugin-foo/index.js
```
You can then just edit and commit the files in the project dir and restart The Lounge
 on every change you do and the changes will be picked up.
 