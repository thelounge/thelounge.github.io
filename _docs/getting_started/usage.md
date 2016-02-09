---
layout: documentation
title: Usage
description: Add your description here
category: Getting Started
order: 1.2
---

# Usage

Once you've installed The Lounge, go ahead and run:

```
$ lounge --help
```

This will give you an overview of the commands you can use.

## `start`

_Start the server._

Example:

```
$ lounge start --port 80 --private
```

Options:

- `-p, --port`
- `-h, --host`
- `--public`
- `--private`

## `config`

_Open the configuration file._

Example:

```
$ lounge config
```

## `list`

_List all existing users._

Example:

```
$ lounge list
```

## `add <name> [<password>]`

_Add a new user._

Example:

```
$ lounge add john
```

## `remove <name>`

_Remove an existing user._

Example:

```
$ lounge remove john
```

## `reset <name>`

_Reset user password._

Example:

```
$ lounge reset john
```

## `edit <name>`

_Edit user configuration file._

Example:

```
$ lounge edit john
```

# Options

## `--home`

_Set the home path. This is the location where The Lounge will look for the `config.js` and the `users/` folder._

Example:

```
$ lounge --home /app add <user>  # add user to /app/users
$ lounge --home /app             # start server with /app/config.js
```

## `--help`

_Output usage information._

Example:

```
$ lounge --help
```

## `--version`

_Output the version number._

Example:

```
$ lounge --version
```
