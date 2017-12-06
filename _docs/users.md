---
layout: documentation
title: Users
order: 5
redirect_from:
  - /docs/server/configuration.html
---

# Users

Once you've set up The Lounge, it's time to add your first users. Open your `config.js` and set `public` to `false`. This will enable user login.

When you start The Lounge in "private" mode it will load every user found in your `users/` folder. Here's some of the features users get:

- Stay online on IRC even when you log out
- Lets you chat from multiple devices simultaneously

## Add user

To add a new user, run this command:

```
$ thelounge add <name>
```

This will create a new user in your `users/` folder.

_Note: By default, users are stored in the `~/.thelounge/users/` folder. You can change this location by using the `THELOUNGE_HOME` environment variable (see [Usage](/docs/usage.html#thelounge_home))._

## Edit user

Open the `user.json` for the specified user:

```
$ thelounge edit <name>
```

## Remove user

Simply run:

```
$ thelounge remove <name>
```

## List users

This command will print a list of all your existing users:

```
$ thelounge list
```

# User configuration

If you run `thelounge edit <name>`, the `user.json` file will open.

The user configuration is loaded upon server start. Here's an example of what a `user.json` file might look like:

```
{
  "user": "example",
  "password": "password",
  "log": false,
  "networks": [{
    "name": "Freenode",
    "host": "irc.freenode.net",
    "port": 6697,
    "tls": true,
    "password": "serverpw",
    "nick": "john",
    "realname": "John Doe",
    "commands": [
      "/msg NickServ identify password",
      "/msg ChanServ op #chan"
    ],
    "join": "#foo, #bar"
	}]
}
```
