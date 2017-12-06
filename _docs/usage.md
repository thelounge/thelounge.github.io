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

## `start`

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

## `config`

_Open the configuration file._

Example:

```
$ thelounge config
```

## `list`

_List all existing users._

Example:

```
$ thelounge list
```

## `add <name>`

_Add a new user._

Example:

```
$ thelounge add john
```

## `remove <name>`

_Remove an existing user._

Example:

```
$ thelounge remove john
```

## `reset <name>`

_Reset user password._

Example:

```
$ thelounge reset john
```

## `edit <name>`

_Edit user configuration file._

Example:

```
$ thelounge edit john
```

# Options

## `--home`

<div class="alert alert-danger" role="alert">
    <strong>As of The Lounge v2.5.0, <code>--home</code> is deprecated. Use the <code>LOUNGE_HOME</code> environment variable instead.</strong>
</div>

_Set the home path. This is the location where The Lounge will look for the `config.js` and the `users/` folder._

*Also configurable through the environment variable `LOUNGE_HOME`.*

Example:

```
$ LOUNGE_HOME=/tmp thelounge start # start server with configuration at /tmp/config.js
```

## `--help`

_Output usage information._

Example:

```
$ thelounge --help
```

## `--version`

_Output the version number._

Example:

```
$ thelounge --version
```
