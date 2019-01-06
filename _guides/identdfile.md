---
layout: documentation
title: Identify users with identd or oident
---

When the IRC server gets a connection request, it will query your system for the ident.
An ident server can read the ident file and send this ident back to the IRC server.

## Built-in identd server

The identd option is a lightweight server implemented in The Lounge itself.
On linux, this currently requires The Lounge to run as root to be able to bind to port 113.

As such, this is not really recommended and `oidentd` is a better choice.
The port is configurable, so this could be worked around with iptables if required.

To enable, set `identd.enable` in [the configuration](/docs/configuration#identd-and-oidentd-support) to `true`.

## oidentd

Alternatively, `oidentd` can be used, as The Lounge also supports writing user ident to a file which can be read by `oidentd`.
To enable, set [`oidentd`](/docs/configuration#identd-and-oidentd-support) variable to `"~/.oidentd.conf"`

If you are using pre-built The Lounge packages, you will need to create the home folder yourself:
```sh
mkdir /home/thelounge/
touch /home/thelounge/.oidentd.conf
chown -R thelounge:thelounge /home/thelounge
```

After that is done, you will need to configure `oidentd` to allow spoofing.

Open `/etc/oidentd.conf` file in a text editor and add the following:

```
user "thelounge" {
  default {
    allow spoof
    allow spoof_all
  }
}
```

If your system has a user with the same name as one of the The Lounge users, the `spoof_all` capability is required.

oidentd must be able to read your `~/.oidentd.conf` file. Therefore, the The Lounge user's home directory permissions should be at least 711.

```bash
chmod 711 /home/thelounge/
chmod 644 /home/thelounge/.oidentd.conf
```
