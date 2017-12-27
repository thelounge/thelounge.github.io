---
layout: documentation
title: Usage
order: 3
redirect_from:
  - /docs/getting_started/install.html
---

Once The Lounge is installed, a program called `thelounge` is now available.

## Command line help

To get general information about the program and an overview of the available
commands, use the `--help` (or `-h`) option:

```sh
thelounge --help
```

To get specific help for a given command, run:

```sh
thelounge <command> --help
```

For example, to know how to use `thelounge start` and the options available,
run:

```sh
thelounge start --help
```

If you need to check which version of The Lounge is installed, use:

```sh
thelounge version
```

## Starting the server

To start the server, run the following command:

```sh
thelounge start
```

This will start a server and display something along the lines of:

<div class="terminal">
  <span class="terminal-log-info"></span>
  Configuration file created at <span class="terminal-green">/etc/thelounge/config.js</span>.<br>

  <span class="terminal-log-info"></span>
  The Lounge <span class="terminal-green">v3.0.0</span> (Node.js <span class="terminal-green">8.9.2</span> on <span class="terminal-green">linux</span> x64)<br>

  <span class="terminal-log-info"></span>
  Configuration file: <span class="terminal-green">/etc/thelounge/config.js</span><br>

  <span class="terminal-log-info"></span>
  Available at <span class="terminal-green">http://:::9000/</span> in <strong style="color: white">private</strong> mode<br>

  <span class="terminal-log-info"></span>
  There are currently no users. Create one with <strong style="color: white">thelounge add &lt;name&gt;</strong>.
</div>

This tells us a few things:

- Since it is the first time The Lounge runs, a configuration file was created.
  Its location depends on how The Lounge was installed (see
  [the installation page](/docs/install_and_upgrade.html)).
- The Lounge can now be accessed at <http://localhost:9000/>.
- It has started in **private** mode, which means only users who
  have an account can log in. There is no guest access.
- There are no user accounts as of yet, so in fact, no one can log in for now
  (see the [user management](http://localhost:4000/docs/users.html) page).

The process can be stopped at any time by hitting <kbd>Ctrl</kbd>+<kbd>C</kbd>.
This will effectively close all connections to remote IRC servers that users are
connected to.

## Specifying a different configuration file

It can be useful to provide a different location for the configuration file. For
example, you might want to store it on another partition, or you might want to
run multiple instances with different configurations.

To do so, use the environment variable called `THELOUNGE_HOME`. It will instruct
a location where The Lounge will look for the configuration file, the available
users, etc.

For example, to start a server with a configuration located at `/tmp/config.js`,
run:

```sh
THELOUNGE_HOME=/tmp thelounge start
```

## Configuring The Lounge

As shown above, The Lounge starts by default in **private** mode on port
**9000**.

To change the mode or port quickly, the `--config` (or `-c`) option can be used.

For example, to start The Lounge on port **9001**, run:

```sh
thelounge start --config port=9001
```

Similarly, to start it in **public** mode, run:

```sh
thelounge start --config public=true
```

This option can be specified multiple times to match the requested
configuration:

```sh
thelounge start -c port=9001 -c public=true
```

However, `--config` is not limited to setting the port or mode. In fact, any
option available in the configuration file can be passed using `--config`.
See the [configuration page](/docs/configuration.html) for a full list.

A few rules apply to the `--config` option:

- Nested objects require using a dot-notation. For example:
  ```sh
  thelounge -c debug.raw=true
  ```
- Lists of values must be wrapped with `[]`. For example:
  ```sh
  thelounge -c transports=[websocket,polling]
  ```
- If a value has a whitespace, it must be wrapped in quotes. For example:
  ```sh
  thelounge -c logs.format="DD MMMM YYYY HH:mm:ss"
  ```
