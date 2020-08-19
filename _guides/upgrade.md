---
layout: documentation
title: Upgrade The Lounge
description: List of all potential breaking changes when upgrading The Lounge from an older version
---

{% include toc.md %}

## Upgrading to The Lounge v4.2.0

- `displayNetwork` option was removed. `lockNetwork` now hides the network options.
- CSS selector `.msg[data-type="motd"]` was changed to `.msg[data-type="monospace_block"]` to apply monospace styling to `HELP` and `INFO` blocks.

## Upgrading to The Lounge v4

We are marking this release as a major update due to the sheer amount of internal code changes, and it is impossible to predict what could have been broken as a result.

Before upgrading, make sure The Lounge does not report any warnings or deprecations in the console.

This guide lists all breaking changes made between the releases of v3.3.0 and v4.0.0 that may require you taking actions before upgrading and running The Lounge.

For a more detailed list of all changes and additions, refer to the [release notes](https://github.com/thelounge/thelounge/releases/tag/v4.0.0) and [all merged pull requests](https://github.com/thelounge/thelounge/pulls?q=milestone%3A4.0.0+is%3Amerged+-label%3A%22Type%3A+Dependencies%22+-label%3A%22Meta%3A+Internal%22) for this release.

### Breaking changes

- You need Node.js v10.15 or more recent.
- Some default CSS selectors have changed, so you might need to update your themes or custom CSS accordingly.
  - Replace `.chan` class in sidebar with `.channel-list-item`. This class can be used globally, and it isn't recommended to prefix it with `#sidebar` or any other selector, since these elements might be used outside the sidebar in future features.
  - Remove the type class (lobby, channel, query and special) from `.channel-list-item` and `.chan` and instead use a data attribute e.g. `data-type="lobby"`. Use the following selector in themes: e.g. `.channel-list-item[data-type="lobby"]`.
    For the child element of the `#chat` container, remove classes `.chan` and `.active` and add class `.chat-view`. Before: `.chan.channel`, now: `.chat-view[data-type="channel"]`.
  - Remove `#windows`.
  - `#upload-progressbar` is now part of `#form` so the content doesn't shift.
  - Added a CSS variable `--overlay-bg-color` for sidebar overlay, upload dragover overlay.
  - Relocate `.not-secure` and `.not-connected` classes to `.channel-list-item` from parent element.
- All hash urls have changed to include a leading slash due to vue-router. For example `/#settings` is now `/#/settings`. The old urls should still work but they redirect to the new format.


## Upgrading to The Lounge v3

This guide lists all breaking changes made between the releases of v2.7.1 and v3.0.0 that may require you taking actions before upgrading and running The Lounge.

In addition to the items listed in this guide, you may want to enable or configure new features of The Lounge v3 manually. For a more detailed list of all changes and additions, refer to the [release notes](https://github.com/thelounge/thelounge/releases/tag/v3.0.0) and [all merged pull requests](https://github.com/thelounge/thelounge/pulls?q=milestone%3A3.0.0+is%3Amerged+-label%3A%22Type%3A+Dependencies%22+-label%3A%22Meta%3A+Internal%22) for this release.

### TL;DR

- You need Node.js v6.13.0 or more recent.
- Everything called `lounge` (such as commands, directories, etc.) becomes `thelounge`.
- `thelounge start` does not have options other than `--config` anymore.
- In the configuration file, `autoload` and `logs` settings can be removed, `themes` and `debug` settings have changed.
- In the client, we warn when using insecure IRC servers, some shortcuts have changed, and the browser support list has changed.
- User log format has changed and may break your tools and scripts.

### Environment

- The Lounge v3.0.0 now requires Node.js v6.13.0 or more recent to run. However, we recommend using the latest Node.js v8.x, current LTS version at the time of writing this guide. [Node.js v7 and v9 have reached End-of-Life](https://github.com/nodejs/Release) and are therefore not supported.
- The environment variable `$LOUNGE_HOME` that can be used to point The Lounge to a specific home directory (housing configuration file, packages, user settings, etc.) is now called `$THELOUNGE_HOME`. More details [here](/docs/usage#specifying-a-different-configuration-file).
- In situations where The Lounge has been installed [from the `npmjs.com` registry](https://www.npmjs.com/package/thelounge) or [from source](https://github.com/thelounge/thelounge), we now recommend using the [`yarn` package manager](https://yarnpkg.com/) in lieu of the `npm`. More details [here](/docs/install-and-upgrade).
- User log files, located `${THELOUNGE_HOME}/logs/<user>/` by default, have changed. Server directories are now named after their name in The Lounge plus a randomized identifier to avoid duplicates (see [#2366](https://github.com/thelounge/thelounge/pull/2366)). Changes were also made to the logging format itself (see [#2501](https://github.com/thelounge/thelounge/pull/2501)). If you are using tools or scripts relying on log format, you will need to update them accordingly.
- The Docker image has been renamed into [`thelounge/thelounge`](https://hub.docker.com/r/thelounge/thelounge/) on DockerHub. The base image does not come with `vim` nor `nano`, and the `slim` flavor was removed. The default data path was changed from `/home/lounge/data` to `/var/opt/thelounge`.

### CLI

- The `lounge` CLI has now been renamed into `thelounge`.
- The Lounge will now print a warning on the server console if CLI commands are not run under the same system user than the configuration file owner.
- The default location of The Lounge's home directory has changed from `~/.lounge` to `~/.thelounge`. If you were still relying on `~/.lounge`, we recommend renaming the directory prior to running `thelounge start`.
- `thelounge start` used to support a few options such as `--host`, `--port`, etc. A new option introduced in v2.7.0, `--config` (aliased `-c`), can be used to override any setting from the configuration file using a `key=value` format, applicable to all subcommands of the CLI. It effectively duplicates these options, which have now be removed. Here are the equivalent values using the new option:
  - `-H, --host <ip>` is now `-c host=<ip>`
  - `-P, --port <port>` is now `-c port=<port>`
  - `-B, --bind <ip>` is now `-c bind=<ip>`
  - `--public` is now `-c public=true`
  - `--private` is now `-c public=false`
- The `--home` option has been removed. Use the `$THELOUNGE_HOME` environment variable instead.
- `thelounge config` has been removed. To edit the configuration file, you must now open it manually using your preferred editor. As a reminder, The Lounge's home directory is displayed as part of `thelounge --help`, and the actual configuration file path loaded by The Lounge is displayed when running `thelounge start`.

### Configuration file

- The `autoload` setting has had no effect since v2.2.0 as The Lounge automatically loads user configuration files on creation, edition, and deletion. The warning recommending to remove this setting from your configuration file has now been removed.
- The `debug` setting has been an object since v2.2.0 to control debugging with more granularity. Available keys are `ircFramework` and `raw`. The fallback allowing you to use the previous boolean format has now been removed.
- The `theme` setting has referred to a theme name since v2.5.0, while it used to be a path to the CSS file for that theme. The fallback to the previous format has now been removed. To use the `theme` setting, either specify themes shipped with The Lounge (`default` or `morning`) or installed from the npm registry (using the `thelounge install`).
- The default theme referred to by the `theme` setting has been renamed from `example` to `default`. As a side note, the default theme in The Lounge v3.0.0 is now substantially different. You can restore the previous look of The Lounge by installing the theme [`thelounge-theme-classic`](https://github.com/thelounge/thelounge-theme-classic). This theme is currently looking for maintainers.
- Two themes that previously shipped with The Lounge, `crypto` and `zenburn`, have now been extracted into external themes at [`thelounge-theme-crypto`](https://github.com/thelounge/thelounge-theme-crypto) and [`thelounge-theme-zenburn`](https://github.com/thelounge/thelounge-theme-zenburn). If you were using them in the `theme` setting, you need to install them and update the setting accordingly. These themes are now looking for maintainers.
- The `logs.format` and `logs.timezone` settings have been removed. The Lounge now logs timestamps using a format of `YYYY-MM-DD HH:mm:ss` (which used to be the default value) in UTC timezone.

### Client

- IRC servers connected to an insecure connection (i.e. the TLS checkbox was not checked when filling the network connect form) now display a warning sign icon and are colored in orange in the channel list. If it is available for this network, you can change this setting by right-clicking on the network name in the channel list, click on "Edit this network...", and update the checkbox (along with the port and sometimes the hostname) before saving the settings again. You will have to disconnect and re-connect to this server.
- To navigate through windows in the channel list from your keyboard, you must now use <kbd>alt</kbd>+<kbd>↓</kbd> / <kbd>alt</kbd>+<kbd>↑</kbd> in lieu of <kbd>ctrl</kbd>+<kbd>↓</kbd> / <kbd>ctrl</kbd>+<kbd>↑</kbd>, more often used in other chat clients.
- We have updated our build pipeline to better reflect our browser support. The Lounge now supports [browsers released less than a year ago](https://browserl.ist/?q=last+1+year%2C+firefox+esr) (and [Firefox ESR](https://www.mozilla.org/en-US/firefox/organizations/)), while we used to support the [last 2 versions of all browsers](https://browserl.ist/?q=last+2+versions). In practice, this drops support for some of the least used browsers on mobile (QQ browser, UC browser, Android Browser, Baidu Browser, Blackberry Browser, IE Mobile, Opera Mini, and Opera Mobile), and IE 10/11 on desktop. It however gives slightly more support flexibility for earlier versions of Chrome (62+), Firefox (56+ and ESR), and Opera (48+).

{% include abbreviations.md %}
