---
layout: documentation
title: Protect The Lounge with HTTPS
description: Easily configure The Lounge to be served over HTTPS for better security and privacy
---

In this guide, we will see how to easily configure The Lounge to be served over [HTTPS](https://en.wikipedia.org/wiki/HTTPS) for better security and privacy.

{: .alert.alert-warning role="alert"}
The Lounge only has basic HTTPS support.

First, you need an HTTPS certificate and a domain. Make sure your domain's A record pointing to your server's IP. [Let's Encrypt](https://letsencrypt.org/) is a free, automated, and open Certificate Authority that provides completely free HTTPS certificates.

Assuming your domain is `thelounge.example.com`, follow these steps:

1. Install nginx with `sudo apt install nginx`.
2. Create configuration file for your domain with `sudo nano /etc/nginx/sites-available/thelounge.example.com`
3. Paste code below:
```
server {
    listen 80;
    server_name thelounge.example.com;

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         "http://127.0.0.1:9000";
    }
}
```
4. Save and close the file.
5. Enable the configuration file with `sudo ln -s /etc/nginx/sites-available/thelounge.example.com /etc/nginx/sites-enabled/thelounge.example.com`
6. Check the configuration file for errors with `sudo nginx -t`
7. If there's no errors, restart nginx with `sudo systemctl restart nginx`
8. Next, install certbot with `sudo apt install certbot python3-certbot-nginx`
9. Start creating SSL certificate with `sudo certbot --nginx -d thelounge.example.com`
10. Enter your valid email and agree to Let's Encrypt's TOS.
11. Enter `2` to automatically redirect traffic to HTTPS
12. Test your secured The Lounge installation by going to `https://thelounge.example.com`
