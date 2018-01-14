---
layout: documentation
title: Install and upgrade
order: 2
redirect_from:
  - /docs/getting_started/install.html
---

## Debian and Ubuntu based distributions

First, make sure [Node.js](https://nodejs.org/) v4 or more recent is installed
with `node --version`. If not, follow the instructions given on the
[official documentation](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).

Then download `thelounge.deb` located at the bottom of
[the latest release](https://github.com/thelounge/lounge/releases/latest).

Finally, open a terminal and install the downloaded package using:

```sh
sudo dpkg --install thelounge.deb
```

This also sets up a `systemd` service, enabled during the install, that you can
control with `systemctl status|start|restart|stop|...`.

The Lounge is now up and running **in private mode** at <http://localhost:9000>.

Its configuration file is located at `/etc/thelounge/config.js`. To configure
The Lounge, go to [the configuration section](/docs/configuration.html).

To upgrade The Lounge, simply follow these steps again after downloading a new
`thelounge.deb` file, and restart the service.

You might want to serve The Lounge behind a reverse proxy such as Nginx. To know
more about the benefits and steps, follow
[the guide on reverse proxies ](/docs/guides/reverse-proxies.html).

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

The Lounge is now up and running **in private mode** at <http://localhost:9000>.

The package provides both a system and a user service to allow you to run The
Lounge as your liking. Simply build and install the AUR package, and start the
service:

- **[System](https://wiki.archlinux.org/index.php/Systemd):**
  `systemctl start thelounge.service`. The configuration is stored in
  `/etc/thelounge/config.js`and runs as `thelounge` user.
- **[User](https://wiki.archlinux.org/index.php/Systemd/User):**
  `systemctl --user start thelounge.service`. The configuration is stored in
  your home directory in `~/.lounge/config.js`.

To configure The Lounge, go to
[the configuration section](/docs/configuration.html).

You might want to serve The Lounge behind a reverse proxy such as Nginx. To know
more about the benefits and steps, follow
[the guide on reverse proxies](/docs/guides/reverse-proxies.html).

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
thelounge start
```

The Lounge is now up and running **in private mode** at <http://localhost:9000>.

Read more about how to use The Lounge from the command line in
[the CLI usage section](/docs/cli_usage.html).

Its configuration file is located at `~/.thelounge/config.js`. To configure The
Lounge, go to [the configuration section](/docs/configuration.html).

To upgrade The Lounge, simply re-run the `install` command above, and restart it.

You might want to serve The Lounge behind a reverse proxy such as Nginx. To know
more about the benefits and steps, follow
[the guide on reverse proxies ](/docs/guides/reverse-proxies.html).

## Docker

Official Docker images of The Lounge are made available for every new release on
[DockerHub](https://hub.docker.com/r/thelounge/lounge/).

To run a container using [Docker Compose](https://docs.docker.com/compose/),
use [this example `docker-compose.yml`
file](https://github.com/thelounge/docker-lounge/blob/master/docker-compose.yml)
and run:

```
docker-compose up --detach
```

Otherwise, run:

```
docker run --detach \
	--name thelounge \
	--publish 9000:9000 \
	--volume ~/.thelounge:/home/thelounge/data \
	--restart always \
	thelounge/thelounge:latest
```

For more details about using The Lounge with Docker, refer to
[the official repository](https://github.com/thelounge/docker-lounge#docker-lounge).

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
thelounge start
```

The Lounge is now up and running **in private mode** at <http://localhost:9000>.

Read more about how to use The Lounge from the command line in
[the CLI usage section](/docs/cli_usage.html).

Its configuration file is located at `~/.thelounge/config.js`. To configure The
Lounge, go to [the configuration section](/docs/configuration.html).

To upgrade The Lounge, simply `git pull` the repository, re-run the `install` and
`build` commands above, and restart it.

You might want to serve The Lounge behind a reverse proxy such as Nginx. To know
more about the benefits and steps, follow
[the guide on reverse proxies ](/docs/guides/reverse-proxies.html).

## Unofficial install methods

Over time, people have come up with recipes to install The Lounge on different
setups and platforms, with different tooling, etc. These are not officially
supported (even when hosted on this website), so use them at your own risk:

- [Install on Heroku](/docs/unofficial-install-methods/heroku.html)
- [Install on Ubuntu / Debian without root access](/docs/unofficial-install-methods/ubuntu-debian-without-root.html)
- [OpenShift Online recipe](https://github.com/pacbard/openshift-thelounge)
- [Ansible role using Supervisor](https://github.com/astorije/ansible-lounge)
- [ARMHF Docker images](https://hub.docker.com/r/lsioarmhf/thelounge/)
- [YunoHost app](https://github.com/YunoHost-Apps/thelounge_ynh)

## Services packaging The Lounge

These services offer The Lounge as part of their app stores. We do not have any
control or responsibility over them, but they usually require little
configuration to get up and running:

{:.app-stores}
[![Bytesized Hosting logo](/img/bytesized-hosting-logo.png)](https://bytesized-hosting.com/ "Bytesized Hosting")
[![Cloudron logo](/img/cloudron-logo.png)](https://cloudron.io/ "Cloudron")
[![Cozy logo](/img/cozy-logo.png)](https://cozy.io/en/ "Cozy")
[![Rambox logo](/img/rambox-logo.png)](http://rambox.pro/ "Rambox")

Please contact these service providers directly if you have any questions or
encounter any issues on these platforms.
