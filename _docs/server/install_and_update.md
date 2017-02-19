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

## Arch Linux

The Lounge is [available in the AUR](https://aur.archlinux.org/packages/thelounge/).

Please follow the
[Arch Linux documentation](https://wiki.archlinux.org/index.php/Arch_User_Repository)
to install this package from the AUR. For example, to install it using an AUR
helper:

```sh
pacaur -aS thelounge
yaourt -aS thelounge
```

Then enable and start the `thelounge.service` unit using:

```sh
systemctl enable --now thelounge.service
```

The Lounge is now up and running **in public mode** at <http://localhost:9000>.

Its configuration file is located at `/etc/thelounge/config.js`. To enable
private mode and configure The Lounge, go to
[the configuration section](/docs/server/configuration.html).

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

{: .alert.alert-info role="alert"}
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

## Running from source

Running The Lounge from source ensures you are running the most recent codebase.

{: .alert.alert-warning role="alert"}
While running The Lounge from source allows you to test the latest features, it
may be unstable or insecure. This is not production-ready, so use at your own
risk!<br>
It is also not recommended to run this as a `root` user.

First, make sure [Node.js](https://nodejs.org/) v4 or more recent is installed
with `node --version`, as well as. If not, follow the instructions given on the
[official documentation](https://nodejs.org/en/download/package-manager/) by
choosing your distribution in the list.

The following commands install the development version of The Lounge:

```sh
git clone https://github.com/thelounge/lounge
cd lounge
npm install
NODE_ENV=production npm run build
npm link
```

{: .alert.alert-info role="alert"}
Note that installing from source does not daemonize nor autostart The Lounge.

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

To update The Lounge, simply `git pull` the repository, re-run the `install` and
`build` commands above, and restart it.

## Services packaging The Lounge

These services offer The Lounge as part of their app stores. We do not have any
control or responsibility over them, but they usually require little
configuration to get up and running:

{:.app-stores}
[![Bytesized Hosting logo](/img/bytesized-hosting-logo.png)](https://bytesized-hosting.com/ "Bytesized Hosting")
[![Cloudron logo](/img/cloudron-logo.png)](https://cloudron.io/ "Cloudron")
[![Cozy logo](/img/cozy-logo.png)](https://cozy.io/en/ "Cozy")

Please contact these service providers directly if you have any questions or
encounter any issues on these platforms.
