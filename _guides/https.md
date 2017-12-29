---
layout: documentation
title: How to protect The Lounge with HTTPS
---

In this guide, we will see how to easily configure The Lounge to be served over
[HTTPS](https://en.wikipedia.org/wiki/HTTPS) for better security and privacy.

First, you need an HTTPS certificate. [Let's Encrypt](https://letsencrypt.org/)
is a free, automated, and open Certificate Authority that provides completely
free HTTPS certificates.

Assuming you have a valid email address at `email@example.com`, and want to
serve The Lounge at `https://thelounge.example.com`, run these commands on your
server:

```sh
git clone https://github.com/letsencrypt/letsencrypt
cd letsencrypt/
./letsencrypt-auto certonly --standalone --email email@example.com -d thelounge.example.com
```

Follow the instructions on screen. This should generate a private key, as well
as your HTTPS certificate that will expire after 90 days.

Open your configuration file, located at `${THELOUNGE_HOME}/config.js` and look
for the `https` key, and set the following values:

- Change `enable` to `true`
- Set `key` to the private key path that was generated, `privkey.pem`
- Set `certificate` to the certificate path, `fullchain.pem`

Let's Encrypt will create its `/etc/letsencrypt` folder as root user, so you
might have to change the owner of these files to the user that runs The Lounge.
