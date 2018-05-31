---
layout: documentation
title: Install The Lounge on Ubuntu / Debian without root access
---

On shell servers you may have Node.js and npm available, but no root/sudo
access. You may still install and use The Lounge there.

First, create a dedicated folder and install The Lounge locally:

```sh
mkdir thelounge
cd thelounge
yarn add thelounge
```

{: .alert.alert-info role="alert"}
If you are not able to install yarn and need to use [npm](https://npmjs.com), be sure to add the `--unsafe-perm` flag when running `npm install --unsafe-perm thelounge`.

To run commands listed on the main documentation, you need to prefix `thelounge`
with the location of the local executable. For example, to start a server, run:

```sh
./node_modules/.bin/thelounge start
```
