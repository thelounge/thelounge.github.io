---
layout: documentation
title: Stylesheets
description: The Stylesheets API lets you feed custom CSS files to all clients of an instance of The Lounge.
type: server
---

The Stylesheets API lets you feed custom CSS files to all clients of an instance of The Lounge.

## Methods

### `#addFile(filename)`

Registers the file whose name is given in arguments. The content of this file will be applied to all clients.

#### Example

```js
module.exports = {
  onServerStart(thelounge) {
    thelounge.Stylesheets.addFile("file.css");
  }
};
```
