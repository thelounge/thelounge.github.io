---
layout: documentation
title: Passenger
description: Add your description here
category: Deployment
order: 4.4
---

# Passenger

This document will explain how to install The Lounge on Phusion Passenger. You can find out more about Passenger at [their website](https://www.phusionpassenger.com/).

### Step 1:

[Install Passenger](https://www.phusionpassenger.com/download#open_source).

### Step 2:

Clone and run the `npm install`:

```
$ git clone https://github.com/thelounge/lounge
$ cd lounge
$ npm install
```

### Step 3:

Add a link from `index.js` to `app.js` (Passenger requires an `app.js` file):

```
ln index.js app.js
```

### Step 4:

Add the server configuration to NGINX (example, change the user/group/server_name to something appropriate):

```nginx
server {
        listen 80;
        listen 443 ssl;
        server_name irc.me.com;
        root <directory you cloned The Lounge to>;

        ssl_certificate <SSL cert>;
        ssl_certificate_key <SSL key>;

        passenger_enabled on;

        passenger_user lounge;
        passenger_group lounge;
        passenger_nodejs /usr/bin/node;
        passenger_app_root <same as root>;
}
```

Or Apache:

```conf
<VirtualHost *:80>
    ServerName irc.me.com
    DocumentRoot <directory you cloned The Lounge to>
    PassengerRoot <directory you cloned The Lounge to>
    PassengerUser lounge
    PassengerGroup lounge
    PassengerAppRoot <same as previous>
</VirtualHost>
```

### Step 5:

Restart your web server (Apache/NGINX) and check to see if it works!
