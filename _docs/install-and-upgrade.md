---
layout: documentation
title: Install and upgrade
description: Install and upgrade The Lounge on Debian, Ubuntu, Arch Linux, from npm releases, using Docker, from source, and more
order: 2
---

{% include toc.md %}

## Debian and Ubuntu based distributions

First, make sure latest [Node.js](https://nodejs.org/) <abbr title="Long Term Support">LTS</abbr> version or latest current release is installed
with `dpkg -s nodejs | grep '^Version'` and `node --version`. If not, follow the instructions given on the
[official documentation](https://github.com/nodesource/distributions?tab=readme-ov-file#debian-and-ubuntu-based-distributions).

Then download `thelounge.deb` located at the bottom of [the latest release](https://github.com/thelounge/thelounge-deb/releases/latest).

Finally, open a terminal and install the downloaded package using:

```
sudo apt install ./thelounge.deb
```

{: .alert.alert-info role="alert"}
This method requires root access. Install The Lounge using [Yarn from an npm release](#from-npm-releases) if you cannot use `sudo`.

This also sets up a `systemd` service, enabled during the install, that you can
control with `systemctl status|start|restart|stop|...`.

The Lounge is now up and running **in private mode** at <http://localhost:9000>.

Its configuration file is located at `/etc/thelounge/config.js`.
To learn how to configure The Lounge, go to [the configuration section](/docs/configuration). To learn how to add users, read [the users section](/docs/users). The `thelounge` command needs to be run as the `thelounge` user, e.g. `sudo -u thelounge thelounge --help`.

To upgrade The Lounge, simply follow these steps again after downloading a new
`thelounge.deb` file, and restart the service.

You might want to serve The Lounge behind a reverse proxy such as Nginx. To know
more about the benefits and steps, follow
[the guide on reverse proxies](/docs/guides/reverse-proxies).

## Arch Linux

The Lounge is [available in the AUR](https://aur.archlinux.org/packages/thelounge/).

Please follow the
[Arch Linux documentation](https://wiki.archlinux.org/index.php/Arch_User_Repository)
to install this package from the AUR. For example, to install it using an AUR
helper such as [Yay](https://github.com/Jguer/yay):

```
yay -aS thelounge
```

Then enable and start the `thelounge.service` unit using:

```
systemctl enable --now thelounge.service
```

The Lounge is now up and running **in private mode** at <http://localhost:9000>.

The package provides both a system and a user service to allow you to run The
Lounge as your liking. Simply build and install the AUR package, and start the
service:

- **[System](https://wiki.archlinux.org/index.php/Systemd):**
  `systemctl start thelounge.service`. The configuration is stored in
  `/etc/thelounge/config.js`and runs as `thelounge` user.
- **[User](https://wiki.archlinux.org/index.php/Systemd/User):**
  `systemctl --user start thelounge.service`. The configuration is stored in
  your home directory in `~/.thelounge/config.js`.

To configure The Lounge, go to
[the configuration section](/docs/configuration).

You might want to serve The Lounge behind a reverse proxy such as Nginx. To know
more about the benefits and steps, follow
[the guide on reverse proxies](/docs/guides/reverse-proxies).

## macOS

{: .alert.alert-info role="alert"}
The below has only been tested on x86 Intel-based Macs. This may or may not work on ARM-based M1 Macs.

1. Install [Xcode Command Line Tools](https://developer.apple.com/download/more/?=command%20line%20tools)
2. Install [Homebrew](https://brew.sh/)
3. Open Terminal
4. Run `brew install gcc node yarn`
5. Follow the ["From npm releases" section](https://thelounge.chat/docs/install-and-upgrade#from-npm-releases) for the remaining steps

## From npm releases

Installing the [npm package](https://www.npmjs.com/package/thelounge) directly
allows you to use stable releases on systems where we do not provide native
packages.

First, make sure you have these installed on your system:

- The latest [Node.js](https://nodejs.org/) LTS version (or latest current release). See the [official installation instructions](https://nodejs.org/en/download/package-manager/).
- [Yarn 1 (classic)](https://legacy.yarnpkg.com/). See [official installation instructions](https://legacy.yarnpkg.com/docs/install).

Then install The Lounge using:

```
yarn global add thelounge
```

Start the server manually using:

```
thelounge start
```

{: .alert.alert-info role="alert"}
Note that installing from npm or yarn does not daemonize nor autostart The Lounge.

The Lounge is now up and running **in private mode** at <http://localhost:9000>.

Read more about how to use The Lounge from the command line in
[the CLI usage section](/docs/usage).

Its configuration file is located at `~/.thelounge/config.js`. To configure The
Lounge, go to [the configuration section](/docs/configuration).

To upgrade The Lounge, simply re-run the `install` command above, and restart it.

You might want to serve The Lounge behind a reverse proxy such as Nginx. To know
more about the benefits and steps, follow
[the guide on reverse proxies](/docs/guides/reverse-proxies).

## Docker

Official Docker images of The Lounge are made available for every new release in
the [GitHub Container Registry](https://ghcr.io/thelounge/thelounge).

To run a container using [Docker Compose](https://docs.docker.com/compose/),
use [this example `docker-compose.yml`
file](https://github.com/thelounge/thelounge-docker/blob/master/docker-compose.yml)
and run:

```
docker-compose up --detach
```

Otherwise, run:

```
docker run --detach \
	--name thelounge \
	--publish 9000:9000 \
	--volume thelounge:/var/opt/thelounge \
	--restart always \
	ghcr.io/thelounge/thelounge:latest
```

For more details about using The Lounge with Docker, refer to
[the official repository](https://github.com/thelounge/thelounge-docker).

## Running from source

Running The Lounge from source ensures you are running the most recent codebase.

{: .alert.alert-warning role="alert"}
While running The Lounge from source allows you to test the latest features, it
may be unstable or insecure. This is not production-ready, so use at your own
risk!<br>
It is also not recommended to run this as a `root` user.

First, make sure latest [Node.js](https://nodejs.org/) LTS version (or latest current release) and [Yarn](https://yarnpkg.com/) are installed on your system. See [official instructions for Node.js](https://nodejs.org/en/download/package-manager/) and [official instructions for Yarn](https://yarnpkg.com/docs/install).

The following commands install the development version of The Lounge:

```
git clone https://github.com/thelounge/thelounge
cd thelounge
yarn install
NODE_ENV=production yarn build
# pick a folder which is in your $PATH env var, ~/.local/bin here
ln -s $(pwd)/index.js ~/.local/bin/thelounge
```

Start the server manually using:

```
thelounge start
```

{: .alert.alert-info role="alert"}
Note that installing from source does not daemonize nor autostart The Lounge.

The Lounge is now up and running **in private mode** at <http://localhost:9000>.

Read more about how to use The Lounge from the command line in
[the CLI usage section](/docs/usage).

Its configuration file is located at `~/.thelounge/config.js`. To configure The
Lounge, go to [the configuration section](/docs/configuration).

To upgrade The Lounge, simply `git pull` the repository, re-run the `install` and
`build` commands above, and restart it.

You might want to serve The Lounge behind a reverse proxy such as Nginx. To know
more about the benefits and steps, follow
[the guide on reverse proxies](/docs/guides/reverse-proxies).

## Unofficial install methods

Over time, people have come up with recipes to install The Lounge on different
setups and platforms, with different tooling, etc. These are not officially
supported (even when hosted on this website), so use them at your own risk:

- [Ansible role using Supervisor](https://github.com/astorije/ansible-thelounge)
- [Cloudron app](https://cloudron.io/store/io.github.thelounge.html)
- [LinuxServer.io Docker images](https://github.com/linuxserver/docker-thelounge)
- [Gentoo GURU package: net-irc/thelounge](https://wiki.gentoo.org/wiki/Project:GURU/Information_for_End_Users)
- [Gentoo container image](https://github.com/rahilarious/gentoo-containers/tree/main/gentoo-thelounge)
- [OpenShift Online recipe](https://github.com/pacbard/openshift-thelounge)
- [Swizzin](https://swizzin.ltd/applications/lounge)
- [YunoHost app](https://github.com/YunoHost-Apps/thelounge_ynh)

## Services packaging The Lounge

These services offer The Lounge as part of their app stores. We do not have any
control or responsibility over them, but they usually require little
configuration to get up and running:

{:.app-stores}
[![Bytesized Hosting logo](/img/logos/bytesized-hosting.svg)](https://bytesized-hosting.com/ 'Bytesized Hosting')
[![Franz logo](/img/logos/franz.svg)](https://meetfranz.com/ 'Franz')
[![Rambox logo](/img/logos/rambox.svg)](https://rambox.pro/ 'Rambox')

Please contact these service providers directly if you have any questions or
encounter any issues on these platforms.
