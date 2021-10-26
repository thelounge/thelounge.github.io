---
layout: documentation
title: Protect The Lounge with HTTPS
description: Easily configure The Lounge to be served over HTTPS for better security and privacy
---

In this guide, we will see how to easily configure The Lounge to be served over [HTTPS](https://en.wikipedia.org/wiki/HTTPS) for better security and privacy.

{: .alert.alert-warning role="alert"}
The Lounge only has basic HTTPS support, and will need to be manually restarted to reload certificates on renewal. For advanced HTTPS support, consider [using a reverse proxy](/docs/guides/reverse-proxies).

First, you need an HTTPS certificate. [Let's Encrypt](https://letsencrypt.org/) is a free, automated, and open Certificate Authority that provides completely free HTTPS certificates.

You can visit the [Certbot website](https://certbot.eff.org/) for instructions on how to correctly generate your free SSL certificate for each operating system.

Follow the instructions on screen. This should generate a private key, as well as your HTTPS certificate that will expire after 90 days.

Open your configuration file, located at `${THELOUNGE_HOME}/config.js` and look for the `https` key, and set the following values:

- Change `enable` to `true`
- Set `key` to the private key path that was generated, `privkey.pem`
- Set `certificate` to the certificate path, `fullchain.pem`

Let's Encrypt will create its `/etc/letsencrypt` folder as root user, so you might have to change the owner of these files to the user that runs The Lounge.
