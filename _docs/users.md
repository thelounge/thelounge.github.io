---
layout: documentation
title: Users
description: User account management on private instances of The Lounge
order: 5
---

In [private mode](/docs/configuration#public), only authorized users can access and use The Lounge.

All user configurations are stored as JSON files in the `${THELOUNGE_HOME}/users/` folder. These are being read upon server startup to connect users to their IRC networks and channels.

{: .alert.alert-info role="alert"}
In **[public mode](/docs/configuration#public)**, none of the commands listed below are available.

{% include toc.md %}

## Listing all users

To get a list of all existing users, use the `list` command:

```
thelounge list
```

If you run it right after installation, you will get the following message because no users are created by default:

<div class="terminal">
  <span class="terminal-log-info"></span>
  There are currently no users. Create one with <span class="terminal-bold">thelounge add &lt;name&gt;</span>.
</div>

## Adding a user

To add a new user, use the `add` command:

```
thelounge add <name>
```

This will ask for a few details:

- **Password:** Along with `<name>`, this will be used to authenticate the user on the login page. Note that when typing it, characters will not appear on the screen for security and privacy reasons. Once created, users can change their passwords directly from the UI.
- **Logs:** By default, user logs are stored at `${THELOUNGE_HOME}/users/`. You can disable this by entering `no`.

Once the user is created, `thelounge list` should now report it correctly:

<div class="terminal">
  <span class="terminal-log-info"></span>
  Users:<br>

  <span class="terminal-log-info"></span>
  1. <span class="terminal-bold">alice</span>
</div>

If The Lounge is currently running, the new user will be directly available without having to restart. In fact, this is reported as such in the output of `thelounge start`:

<div class="terminal">
  <span class="terminal-log-info"></span>
  User <span class="terminal-bold">alice</span> loaded
</div>

## Removing a user

Similarly, the following command deletes the configuration of a given user:

```
thelounge remove <name>
```

This takes effect immediately. If The Lounge is already running, its output will report:

<div class="terminal">
  <span class="terminal-log-info"></span>
  User <span class="terminal-bold">alice</span> disconnected and removed.
</div>

Note that this does not delete the logs for this user.

## Resetting a user's password

If a user loses their password, you can reset it with the `reset` command:

```
thelounge reset <name>
```

This will interactively ask you for a new password, similarly to the `add` command. The previous password is not required. The new password will take effect immediately, without having to restart the server, and any running instance of The Lounge will report:

<div class="terminal">
  <span class="terminal-log-info"></span>
  Password for user <span class="terminal-bold">alice</span> was reset.
</div>

## Editing a user configuration file

The `edit` command opens `vi` (or whatever program you set in your `$EDITOR` environment variable if any) with the configuration file of a given user:

```
thelounge edit <name>
```

You can directly edit it by opening the corresponding `${THELOUNGE_HOME}/users/<name>.json` file.

Note that apart from the password field, all changes to the configuration file will require a server restart to take effect.
