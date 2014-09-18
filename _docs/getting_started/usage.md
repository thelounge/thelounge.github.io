---
layout: documentation
title: Usage
description: Add your description here
category: Getting Started
order: 1.2
---

# Usage

Once you've installed Shout, go ahead and run:

```
shout --help
```

This will give you an overiew of the commands you can use.

# Commands

## `start`

_Start the Shout server._ 

Example:

```
shout start --port 80 --private
```

Options:

- `-p, --port`  
- `-h, --host`
- `--public`
- `--private`

## `config`

_Opens the configuration file._

Example user:

```
shout config
```

## `list`

_List all existing users._ 

Example:

```
shout list
```

## `add <name> [<password>]`

_Add a new user._ 

Example:

```
shout add john
```

## `remove <name>`

_Remove an existing user._ 

Example:

```
shout remove john
```

## `reset <name>`

_Reset user password._

Example:

```
shout reset john
```

## `edit <name>`

_Edit user configuration file._ 

Example:

```
shout edit john
```

# Options

## `--help`

_Output usage information._

Example:

```
shout --help
```

## `--version`

_Output the version number._ 

Example:

```
shout --version
```
