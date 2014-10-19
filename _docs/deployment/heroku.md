---
layout: documentation
title: Heroku
description: Add your description here
category: Deployment
order: 4.3
---

# Heroku

This document will explain how to install Shout on Heroku. If you want to learn about Heroku you should read their [documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

<div class="alert alert-warning" role="alert">
  <p>
    Please be aware that Heroku automatically kills unpaid apps after 1 hour of inactivity, and then spins them back up the next time a request comes in.
    This does not apply to paid accounts.
    If you scale up to two servers and pay for the second one, you get two always-on servers.
    <a href="https://devcenter.heroku.com/articles/dynos\#dyno-sleeping">Read more</a>
  </p>

  <p>
    When heroku kills shout, you need to connect to servers and channels again from scratch.
    In practice, you get no always-on functionality with an unpaid heroku account.
  </p>
</div>

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
