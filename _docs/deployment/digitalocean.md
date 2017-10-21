# Digital Ocean

This part of the documentation will guide you through an installation of The
Lounge using a Digital Ocean VPS. For more information about Digital Ocean, visit 
[Digital Ocean's Website](https://digitalocean.com).

In this setup guide we will installing The Lounge via npm, and we'll use Nginx as a reverse proxy.

## Step 1:

Sign up for Digital Ocean and start a _Debian 9_ VPS:

For more information about this process, you can visit Digital Ocean's [getting started
guide](https://www.digitalocean.com/help/getting-started/setting-up-your-server/).

## Step 2:

Log into the Debian 9 VPS and install dependencies (NodeJS + npm 6.x + nginx):

    curl -sL https://deb.nodesource.com/setup_6.x
    chmod +x setup
    ./setup
    apt-get install nodejs
    apt-get install nginx

At this point, nodejs, npm, and nginx should be installed.

## Step 3

Use npm to install The Lounge:

    npm install -g thelounge

The `-g` flag forces npm to install The Lounge globally.

## Step 4

Setup a system user to run The Lounge:

    useradd thelounge -r -m -d /opt/thelounge

## Step 5

Setup a systemd unit file for The Lounge:

    vi /etc/systemd/system/thelounge.service

```
[Unit]
Description=The Lounge IRC client
After=networking.target

[Service]
Type=simple
ExecStart=/usr/bin/lounge start
User=thelounge
Group=thelounge
Restart=on-failure
RestartSec=5
StartLimitInterval=60s
StartLimitBurst=3

[Install]
WantedBy=default.target
```

## Step 6

Modify The Lounge's configuration file and enable reverse forward listening:

    vi /opt/thelounge/.lounge/config.js

    # Change
    host: undefined,
    # To
    host: localhost,

    # Change
    reverseProxy: false,
    # To
    reverseProxy: true,

## Step 7

Setup nginx as a reverse proxy:

    rm -f sites-enabled/default
    vi /etc/nginx/conf.d/lounge.conf

    server {
      listen 80;
  
      location / {
        proxy_pass http://localhost:9000;
      }
    }

## Step 8

Start your services:

    systemctl start nginx ; systemctl enable nginx
    systemctl start thelounge ; systemctl enable thelounge

## Step 9

Setup a user for The Lounge:

    su - thelounge
    lounge add johndoe

## Step 10

Log into The Lounge at `http://<ip address>` and login as the user you setup!

## Additional Steps

- Setup SSL for your server using LetsEncrypt
- Buy a domain and point it at your server
- Setup Log Rotation for The Lounge
