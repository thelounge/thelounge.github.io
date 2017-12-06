---
layout: documentation
title: Usage
order: 3
redirect_from:
  - /docs/getting_started/install.html
---

# Usage

Once you've installed The Lounge, go ahead and run:

```
$ thelounge --help
```

This will give you an overview of the commands you can use.

## Commands

### `start`

_Start the server._

Example:

```
$ thelounge start --port 80 --private
```

Options:

- `-p, --port`
- `-h, --host`
- `--public`
- `--private`

### `config`

_Open the configuration file._

Example:

```
$ thelounge config
```

### `list`

_List all existing users._

Example:

```
$ thelounge list
```

### `add <name>`

_Add a new user._

Example:

```
$ thelounge add john
```

### `remove <name>`

_Remove an existing user._

Example:

```
$ thelounge remove john
```

### `reset <name>`

_Reset user password._

Example:

```
$ thelounge reset john
```

### `edit <name>`

_Edit user configuration file._

Example:

```
$ thelounge edit john
```

## Options

### `--help`

_Output usage information._

Example:

```
$ thelounge --help
```

### `--version`

_Output the version number._

Example:

```
$ thelounge --version
```

## Environment variables


### `THELOUNGE_HOME`

_Set the home path. This is the location where The Lounge will look for the `config.js` and the `users/` folder._

Example:

```
$ THELOUNGE_HOME=/tmp thelounge start # start server with configuration at /tmp/config.js
```
