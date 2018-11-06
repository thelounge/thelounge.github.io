---
layout: documentation
title: Context Menu
description: Manage commands that appear in the context menu.
type: client
---

The Context Menu API lets you add commands to the context menu, accessible when right-clicking a user or channel. It is also accessible from the menu button located on the top-right corner of chat windows.

## Methods

### `#addContextMenuItem(options)`

Adds an item to the context menu.

Available properties of `options`:

**`check(jQuery): boolean`**
: Function to check whether item should show on the context menu, called with the target jQuery element, shows if return is truthy.

**`className: (string | jQuery => string)`**
: Class name for the menu item, should be prefixed for non-default menu items. If passed a function, called with jQuery element, and uses return value.

**`data: (string | jQuery => object)`**
: Data that will be sent to the callback function. If passed a function, called with jQuery element, and uses return value.

**`displayName: (string | jQuery => string)`**
: Text to display on the menu item. If passed a function, called with jQuery element, and uses return value.

**`callback: object => void`**
: Function to call when the context menu item is clicked, called with the data requested in `options.data`.

#### Example

```js
addContextMenuItem({
  check: (target) => target.hasClass("user"),
  className: "customItemName",
  data: (target) => target.data("name"),
  displayName: "Do something",
  callback: (name) => console.log(name), // Print the name of the user to console
});
```
