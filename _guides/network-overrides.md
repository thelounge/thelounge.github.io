---
layout: documentation
title: Override network defaults in the URL
description: Pre-load the form to connect to a server with custom values based on the URL in public mode
---

In **public mode only**, it is possible to pre-load the form to connect to a server with custom values based on the URL.

For example, the URL <https://demo.thelounge.chat/?join=foo,bar> will offer the user to connect to the default server and immediately joining the channels `#foo` and `#bar`.

The following URL parameters can be used to override the fields of the Connect form:

- `name`
- `host`
- `port`
- `tls`
- `rejectUnauthorized`
- `nick`
- `username`
- `password`
- `realname`
- `join` or `channels`

Note that when [the `lockNetwork` setting](/docs/configuration#locknetwork) is set to `true`, the keys `host`, `port`, and `rejectUnauthorized` have no effect. When [the `displayNetwork` setting](/docs/configuration#displaynetwork) is set to `false`, the `name` key has no effect.

When using the comma-separated `join` or `channels` keys, alphanumeric sequences will be prefixed with `#`. For example, `?join=foo` fills the form field with
`#foo`.

{: .alert.alert-warning role="alert"}
If you need to explicitly use a `#` character, you must use `%23` instead. For example, `?join=%23%23bar` fills the form field with `##bar`. Similarly, you must use `%26` for `&`-prefixed channels.

{% include abbreviations.md %}
