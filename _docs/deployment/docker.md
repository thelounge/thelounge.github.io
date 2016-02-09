---
layout: documentation
title: Docker
description: Add your description here
category: Deployment
order: 4.1
---

# Docker

This part of the documentation will guide you through an installation of The Lounge using Docker.

Please follow these [instructions](https://docs.docker.com/installation/#installation) on how to install Docker (or [boot2docker](https://github.com/boot2docker/boot2docker)) on your system. Then follow the steps below:

### Step 1:

Clone the repository of The Lounge:

```
$ git clone https://github.com/thelounge/lounge.git
$ cd lounge
```

### Step 2:

Build a Docker image according to our [Dockerfile](#!) and name it `lounge-img`:

```
$ docker build --tag=lounge-img .
```

### Step 3:

Verify that the image has been created:

```
$ docker images
REPOSITORY         TAG        IMAGE ID         CREATED          VIRTUAL SIZE
lounge-img         latest     95da6797223b     9 minutes ago    833.1 M
```

### Step 4:

Create a new container named `lounge` from the `lounge-img` image and run the app in it:

```
$ docker run --name=lounge --publish=9000:9000 --detach --tty lounge-img
```

### Step 5:

Verify that the container is running:

```
$ docker ps
CONTAINER ID     IMAGE               COMMAND             CREATED         STATUS         PORTS                    NAMES
bf0a83b7cc07     lounge-img:latest   /bin/sh -c lounge   42 minutes ago  Up 42 minutes  0.0.0.0:9000->9000/tcp   lounge
```

### Step 6:

The Lounge should now be running on `http://localhost:9000/`.

_If you're using [boot2docker](https://github.com/boot2docker/boot2docker), run `$ boot2docker ip` to find out which address it's using._

## Usage

To __stop__ the Docker container:

```
$ docker stop lounge
```

.. and to __start__ it again:

```
$ docker start lounge
```

## Uninstall

If you've want to remove your Docker container:

```
$ docker stop lounge
$ docker rm lounge
```

_Note: This will remove the container and all your users inside._
