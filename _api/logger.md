---
layout: documentation
title: Logger
description: The Logger API lets you access the server's logging facility.
type: server
---

The Logger API lets you access the server's logging facility.

Messages can be logged at different levels of severity, listed below and will be rendered to the same
logging output as The Lounge internal logging messages, using the same styles.
The various logging levels are rendered in different colors, care should be taken to pick the appropriate one.

## Methods
All logging methods automatically add the plugin name as a prefix, meaning there is no need to identify
where the message is originating from.

All methods take any number of of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.

The specific methods are (in descending order of severity):

- `error(...args)`
- `warn(...args)`
- `info(...args)`
- `debug(...args)`

#### Example

```js
module.exports = {
	onServerStart(api) {
	api.Logger.debug("hello world")
	const err = doSomethingThatMayFail()
	if (err) {
		api.Logger.error("failed to do something", err)
	}
  }
};
```
