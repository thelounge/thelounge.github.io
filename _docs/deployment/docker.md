---
layout: documentation
title: Docker
description: Add your description here
category: Deployment
order: 4.1
---

# Docker

This part of the documentation will guide you through an installation of Shout using Docker.

Please follow these [instructions](https://docs.docker.com/installation/#installation) on how to install Docker (or [boot2docker](https://github.com/boot2docker/boot2docker)) on your system. Then follow the steps below:

### Step 1:

Clone the Shout repository:

```
$ git clone git@github.com:erming/shout.git
$ cd shout
```

### Step 2:

Build a Docker image according to our [Dockerfile](#!) and name it `shout-img`:

```
$ docker build --tag=shout-img .
```

### Step 3:

Verify that the image has been created:

```
$ docker images
REPOSITORY         TAG        IMAGE ID         CREATED          VIRTUAL SIZE
shout-img          latest     95da6797223b     9 minutes ago    833.1 M
```

### Step 4:

Create a new container named `shout` from the `shout-img` image and run the app in it:

```
$ docker run --name=shout --publish=9000:9000 --detach --tty shout-img
```

### Step 5:

Verify that the container is running:

```
$ docker ps
CONTAINER ID     IMAGE               COMMAND             CREATED         STATUS         PORTS                    NAMES
bf0a83b7cc07     shout-img:latest    /bin/sh -c shout    8 minutes ago   Up 8 minutes   0.0.0.0:9000->9000/tcp   shout
```

### Step 6:

Shout should now be running on `http://localhost:9000/`.

_If you're using [boot2docker](https://github.com/boot2docker/boot2docker), run `$ boot2docker ip` to find out which address it's using._

## Usage

To __stop__ the Docker container:

```
$ docker stop shout
```

.. and to __start__ it again:

```
$ docker start shout
```

## Uninstall

If you've want to remove your Docker container:

```
$ docker stop shout
$ docker rm shout
```

_Note: This will remove the container and all your users inside._
