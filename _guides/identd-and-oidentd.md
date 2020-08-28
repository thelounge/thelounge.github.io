---
layout: documentation
title: Identify users with identd or oidentd
description: Prove that IRC connections are valid with our built-in identd server and/or oidentd
---

In general, and in the context of IRC, ident is a method that can be used to prove that connections are valid.

When the IRC server gets a connection request, it will query your system for the ident.
An ident server can read the ident file and send this ident back to the IRC server.

On most IRC networks, when the server fails to get an ident response, it falls back to the username given by client, but marks it as "not verified", usually by prefixing with a tilde; e.g. `~josh`.

{: .alert.alert-warning role="alert"}
If you use a firewall, port 113 using TCP must be open to the public to allow IRC servers to connect to it.

## Built-in identd server

The identd option is a lightweight server implemented in The Lounge itself.
On Linux, this currently requires The Lounge to run as root to be able to bind to port 113.

As such we recommend setting up the built-in server along side `oidentd` and configuring it to forward requests to the built-in server.

To enable `identd` support, set `identd.enable` in [the configuration](/docs/configuration#identd-and-oidentd-support) to `true`.

## Using oidentd to forward requests to the built-in server

If you have oidentd 2.3.0 or later available, you can use oidentd to forward requests to The Lounge's built-in ident server.

In The Lounge config, set `identd.enable` to `true`, and `identd.port` to a port higher than 1024, for example 9001.

Then, open `/etc/oidentd.conf` file in a text editor and add the following:

```
user "thelounge" {
	default {
		allow spoof

		# Use this if The Lounge needs to spoof local user names
		allow spoof_all

		# 9001 is the port you set in The Lounge's config
		force forward 127.0.0.1 9001
	}
}
```

If you have set the [`bind` configuration property](/docs/configuration#bind), you will need to change `127.0.0.1` to the same bind address in the oidentd configuration above.

## Using oidentd only

{: .alert.alert-warning role="alert"}
If you have oident 2.3.0 or later available, using oidentd along with built-in identd is preferred as it solves multiple issues including concurrency and file permission issues.

`oidentd` can be used, as The Lounge also supports writing user ident to a file which can be read by `oidentd`.
To enable `oidentd` support, set the [`oidentd` configuration option](/docs/configuration#identd-and-oidentd-support) to `"~/.oidentd.conf"`

If you have installed The Lounge as a service (pre-built package), the service has no access to `/home` folder and thus this method will not work. [Refer to using oidentd along with the built-in identd above](#using-oidentd-to-forward-requests-to-built-in-server).

After that is done, you will need to configure `oidentd` to allow spoofing.

Open `/etc/oidentd.conf` config file in a text editor and add the following:

```
user "thelounge" {
	default {
		allow spoof
		allow spoof_all
	}
}
```

If your system has a user with the same name as one of the The Lounge users, the `spoof_all` capability is required.

oidentd must be able to read your `~/.oidentd.conf` file. Therefore, the home directory permissions of user `thelounge` should be at least 711:

```bash
chmod 711 /home/thelounge/
chmod 644 /home/thelounge/.oidentd.conf
```
