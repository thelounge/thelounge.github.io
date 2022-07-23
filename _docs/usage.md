---
layout: documentation
title: Usage
description: Available commands and options of thelounge, the CLI of The Lounge
order: 3
---

Once The Lounge is installed, a program called `thelounge` is now available.

{% include toc.md %}

## Client help

To view available keybinds, autocompletion options, and commands, press the <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg> help button in the sidebar next to the settings cog.

This page also checks for The Lounge and package updates, and allows you to read the changelog for the currently installed version.

## Native app

The Lounge is a progressive web app (PWA), and can be installed from any modern browser for a native-like experience without having a dedicated app.

An "Add The Lounge to home screen" button should show up in settings when The Lounge is running in [private mode](/docs/configuration#public).

Push notifications are supported on all platforms except for iOS, due to Apple [not supporting web push specification](https://bugs.webkit.org/show_bug.cgi?id=182566) and all browsers being reskins of Safari.

## Command line help

To get general information about the program and an overview of the available
commands, use the `--help` (or `-h`) option:

```
thelounge --help
```

To get specific help for a given command, run:

```
thelounge <command> --help
```

For example, to know how to use `thelounge start` and the options available,
run:

```
thelounge start --help
```

If you need to check which version of The Lounge is installed, use:

```
thelounge --version
```

## Using the correct system user

Note that all commands **must** be executed as the same user The Lounge will be run as.

If you installed The Lounge via the package manager on a unix like system and plan to run it as a system service, the user is called "thelounge". So every command needs to be executed as `sudo -u thelounge thelounge <command>`, where `<command>` should be substituted with a subcommand like `start` or `add`

## Starting the server

To start the server, run the following command:

```
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
  [the installation page](/docs/install-and-upgrade)).
- The Lounge can now be accessed at <http://localhost:9000/>.
- It has started in **private** mode, which means only users who
  have an account can log in. There is no guest access.
- There are no user accounts as of yet, so in fact, no one can log in for now
  (see the [user management](/docs/users) page).

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

```
THELOUNGE_HOME=/tmp thelounge start
```

## Installing additional themes

A list of all available themes can be found [on the npm registry](https://www.npmjs.com/search?q=keywords%3Athelounge-theme) and installed with `thelounge install`. For example, to install a theme called `thelounge-theme-solarized`, run:

```
thelounge install thelounge-theme-solarized
```

The Lounge automatically loads the theme after installation and makes it available in the client settings.

Additionally, any theme can be used as the default one for all clients. See [the `theme` section on the configuration page](/docs/configuration#theme) for more information.

For local themes, see [Installing local packages](#installing-local-packages)

## Installing plugins

A list of some plugins can be found [on the npm registry](https://www.npmjs.com/search?q=keywords%3Athelounge-plugin) and installed with `thelounge install`. For example, to install a plugin called `thelounge-plugin-closepms`, run:

```
thelounge install thelounge-plugin-closepms
```

The Lounge automatically loads the plugin after installation and activates it.

For local plugins, see [Installing local packages](#installing-local-packages)

## Installing local packages

During development of packages or if uploading a package to the npm registry is undesired, packages can be installed from the local file system.

That's done by adding a file: prefix to package name:

```
thelounge install file:~/path/to/package_dir
```


## Configuring The Lounge

As shown above, The Lounge starts by default in **private** mode on port
**9000**.

To change the mode or port quickly, the `--config` (or `-c`) option can be used.

For example, to start The Lounge on port **9001**, run:

```
thelounge start --config port=9001
```

Similarly, to start it in **public** mode, run:

```
thelounge start --config public=true
```

This option can be specified multiple times to match the requested
configuration:

```
thelounge start -c port=9001 -c public=true
```

However, `--config` is not limited to setting the port or mode. In fact, any
option available in the configuration file can be passed using `--config`.
See the [configuration page](/docs/configuration) for a full list.

A few rules apply to the `--config` option:

- Nested objects require using a dot-notation. For example:
  ```
  thelounge start -c debug.raw=true
  ```
- Lists of values must be wrapped with `[]`. For example:
  ```
  thelounge start -c transports=[websocket,polling]
  ```
- If a value has a whitespace, it must be wrapped in quotes. For example:
  ```
  thelounge start -c defaults.name="Cool Network"
  ```
