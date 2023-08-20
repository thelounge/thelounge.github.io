---
layout: documentation
title: Send CTCP commands with The Lounge
description: How to use CTCP with The Lounge, and description of CTCP commands
---

[CTCP](https://en.wikipedia.org/wiki/Client-to-client_protocol) commands are special messages that can be sent to a channel or other clients. Servers do not interpret their content, as it is the role of the receiving client to do so.

In fact, you might have used a CTCP command without knowing it. In The Lounge and most IRC clients, sending `/me says hello world` actually sends the CTCP `ACTION` command with `says hello world` as a parameter. It is then interpreted by clients to display it in the way you are familiar with.

With The Lounge, you can send a CTCP command by sending messages starting with `/ctcp`. If you are sending requests to other users using The Lounge, here are the currently implemented ones:

- `/ctcp <nick> version` returns something along the lines of `VERSION thelounge v3.0.0 -- https://thelounge.chat/`
- `/ctcp <nick> source` returns `SOURCE git+https://github.com/thelounge/thelounge.git`
- `/ctcp <nick> ping foo` returns `PING foo`

The Lounge does not support all CTCP commands, such as [DCC](https://en.wikipedia.org/wiki/Direct_Client-to-Client).

{: .alert.alert-info role="alert"}
When querying other users, know that their clients might inform them that you are requesting information about them, in the form of a notification or sound.

To learn more about CTCP, [this document](https://tools.ietf.org/id/draft-oakley-irc-ctcp-02.html) is a great reference, more technical and in-depth than this high-level guide.

{% include abbreviations.md %}
