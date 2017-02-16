---
layout: documentation
title: Install and update
category: Server
order: 2.1
redirect_from:
  - /docs/getting_started/install.html
---

# Installing and updating The Lounge

## Debian and Ubuntu based distributions

First, make sure [Node.js](https://nodejs.org/) v4 or more recent is installed
with `node --version`. If not, follow the instructions given on the
[official documentation](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).

Then download `lounge.deb` located at the bottom of
[the latest release](https://github.com/thelounge/lounge/releases/latest).

Finally, open a terminal and install the downloaded package using:

```sh
sudo dpkg --install lounge.deb
```

This also sets up a `systemd` service, enabled during the install, that you can
control with `systemctl status|start|restart|stop|...`.

The Lounge is now up and running **in public mode** at <http://localhost:9000>.

Its configuration file is located at `/etc/lounge/config.js`. To enable
private mode and configure The Lounge, go to
[the configuration section](/docs/server/configuration.html).

To update The Lounge, simply follow these steps again after downloading a new
`lounge.deb` file, and restart the service.

## From npm releases

Installing the [npm package](https://www.npmjs.com/package/thelounge) directly
allows you to use stable releases on systems where we do not provide native
packages.

First, make sure [Node.js](https://nodejs.org/) v4 or more recent is installed
with `node --version`, as well as [npm](https://www.npmjs.org/). If not, follow
the instructions given on the
[official documentation](https://nodejs.org/en/download/package-manager/) by
choosing your distribution in the list.

Then install The Lounge using:

```sh
[sudo] npm --global install thelounge
```

{: .alert.alert-warning role="alert"}
Note that installing from npm does not daemonize nor autostart The Lounge.

Start the server manually using:

```sh
lounge start
```

The Lounge is now up and running **in public mode** at <http://localhost:9000>.

Read more about how to use The Lounge from the command line in
[the CLI usage section](/docs/server/cli_usage.html).

Its configuration file is located at `~/.lounge/config.js`. To enable
private mode and configure The Lounge, go to
[the configuration section](/docs/server/configuration.html).

To update The Lounge, simply re-run the `install` command above, and restart it.
