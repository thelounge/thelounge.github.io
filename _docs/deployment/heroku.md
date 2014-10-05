---
layout: documentation
title: Heroku
description: Add your description here
category: Deployment
order: 4.3
---

# Heroku

This document will explain how to install Shout on Heroku. If you want to learn about Heroku you should read their [documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

Okay, let's get down to business:

### Step 1:

Begin by logging in with the [Heroku toolbelt](https://toolbelt.heroku.com/):

```
$ heroku login
```

### Step 2:

Clone and run the `npm install`:

```
$ git clone http://github.com/erming/shout
$ cd shout
$ npm install
```

### Step 3:

While standing in the `shout/` directory, run:

```
heroku create
```

### Step 4: (optional)

_This step is only useful if you want to run Shout with users accounts._

Create a `Procfile` and edit the content to look like this:

```
web: node index --private --home /app
```

_You can read more about Procfiles [here](https://devcenter.heroku.com/articles/procfile)._

To create users, stand in the `shout/` directory and call this:

```
$ ./index.js --home . add <username>
```

### Step 5:

Time to publish to Heroku!

If you've made any changes to the repository (like adding users or the Profile), don't forget to save the changes with `git`:

```
$ git add .
$ git commit -m "Added Heroku files"
```

And with that done, lets go ahead and push to Heroku:

```
$ git push heroku
```
