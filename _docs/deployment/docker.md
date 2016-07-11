---
layout: documentation
title: Docker
description: Add your description here
category: Deployment
order: 4.1
---

# Docker

This part of the documentation will guide you through an installation of The Lounge using Docker.
For more information about the Docker setup itself, see the documentation on [DockerHub](https://hub.docker.com/r/thelounge/lounge/).

Please follow these [instructions](https://docs.docker.com/installation/#installation) on how to install Docker.

## Official images

The Lounge automatically releases Docker images of The Lounge for every new release on [DockerHub](https://hub.docker.com/r/thelounge/lounge/).
These images are available under the name `thelounge/lounge`. Older releases are made available through tags, e.g. `thelounge/lounge:1.5.0`.

To run a container using an official image, follow the steps below;

### Step 1:

Start the container:

```
$ docker run --name=thelounge --publish=9000:9000 --detach thelounge/lounge
```

### Step 2:

The Lounge should now be running on [`http://localhost:9000/`](http://localhost:9000/).

_If you're running the Docker host in a VM (common on Windows & Mac) you need to find out the IP address of your Docker host manually._

## Manually building

Manually building a Docker image of The Lounge is useful if you want to modify stuff like build arguments.
To manually build a Docker image, follow the steps below;

### Step 1:

Clone the Docker repository of The Lounge:

```
$ git clone https://github.com/thelounge/docker-lounge.git
$ cd docker-lounge
```

### Step 2:

Build a Docker image according to our [Dockerfile](https://hub.docker.com/r/thelounge/lounge/~/dockerfile/) and name it `lounge`:

```
$ docker build --tag=lounge .
```

### Step 3:

Create a new container named `thelounge` from the `lounge` image and run the app in it:

```
$ docker run --name=thelounge --publish=9000:9000 --detach lounge
```

### Step 4:

The Lounge should now be running on [`http://localhost:9000/`](http://localhost:9000/).

_If you're running the Docker host in a VM (common on Windows & Mac) you need to find out the IP address of your Docker host manually._
