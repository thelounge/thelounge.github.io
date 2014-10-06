---
layout: documentation
title: Install
description: Add your description here
category: Getting Started
order: 1.1
---

# Installing Shout

Shout requires [nodejs](http://nodejs.org/) and [npm](https://www.npmjs.org/). If you already have them installed on your system, go ahead and install Shout:

```
$ sudo npm -g install shout
```

And if you don't &mdash; pick your operating system below:

## Linux

### Step 1:

Install the requirements using apt-get:

```
$ sudo apt-get -y install nodejs-legacy npm
```

### Step 2:

Install Shout:

```
$ sudo npm install -g shout
```

## Mac OSX

### Step 1:

Install [Homebrew](http://brew.sh/).

Copy and paste this snippet into your terminal:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Step 2:

Install [nodejs](http://nodejs.org):

```
$ brew install nodejs
```

### Step 3:

Install Shout:

```
$ sudo npm -g install shout
```

## Windows

### Step 1:

Install [Chocolatey](https://chocolatey.org/).

### Step 2:

Open the Command Prompt as __administrator__ and run this command:

```
choco install nodejs.install
```

### Step 3:

Now close your Command Prompt and open the `Node.js Command Prompt` that was just installed on your computer.

### Step 4:

Install Shout:

```
npm install -g shout
```

# Install complete

When you're done installing Shout, go ahead to [the next section](/docs/getting_started/usage.html)
