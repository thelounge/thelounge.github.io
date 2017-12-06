---
layout: documentation
title: Themes
order: 99
redirect_from:
  - /docs/plugins/themes.html
---

# Finding Themes

Themes published on npm should have the keyword `thelounge-theme`, so you can
find a list by
[searching on npmjs.org](https://www.npmjs.com/search?q=keywords%3Athelounge-theme).

# Installing Themes

To install theme `thelounge-theme-custom`:

* `lounge install thelounge-theme-custom`
* Restart The Lounge
* Select theme in options

# Creating Themes

Create an npm package using the base `package.json` below, and publish to npm:

```
{
  "name": "thelounge-theme-custom", // Replace 'custom' with your theme name
  "version": "1.0.0",
  "description": "A theme for The Lounge",
  "main": "package.json",
  "thelounge": {
    "css": "theme.css", // Set to the theme css file
    "name": "Theme Name", // The display name
    "type": "theme"
  },
  "license": "MIT",
  "homepage": "https://github.com/username/thelounge-theme-custom", // Set to your homepage
  "repository": {
    "type": "git",
    "url": "git+https://github.com/username/thelounge-theme-custom.git" // Set your git repository
  },
  "keywords": [
    "thelounge",
    "thelounge-theme"
  ],
  "bugs": {
    "url": "https://github.com/username/thelounge-theme-custom/issues" // Set to a page for people to file issues
  }
}
```

Alternatively, you can have your `main` file as a JS file, and export a
`thelounge` object on it, containing the same information as above. For example:

```
module.exports = {
  thelounge: {
    "css": "theme.css", // Set to the theme css file
    "name": "Theme Name", // The display name
    "type": "theme"
  }
}
```
