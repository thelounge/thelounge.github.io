---
layout: documentation
title: Install
description: Add your description here
category: Getting Started
order: 1.1
---

# Installation

Decide whether to continue with or without Docker and follow the specific instructions bellow.

With Docker:

[Docker installation instructions](/docs/getting_started/docker.html)

Without Docker:

Shout requires [nodejs](http://nodejs.org/) and [npm](https://www.npmjs.org/). If you already have them installed on your system, go ahead and install Shout:

```
sudo npm -g install shout
```

And if you don't &mdash; pick your operating system below:

## Linux

### Step 1:

Install the requirements using apt-get:

```
sudo apt-get -y install nodejs-legacy npm
```

### Step 2:

Install Shout:

```
sudo npm -g install shout
```

## Mac OSX

### Step 1:

Install [Homebrew](http://brew.sh/):

Copy and paste this snippet into your terminal:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Step 2:

Install [nodejs](http://nodejs.org):

```
brew install nodejs
```

### Step 3:

Install Shout:

```
sudo npm -g install shout
```

# Install complete

When you're done installing Shout, go ahead to [the next section](/docs/getting_started/usage.html)
