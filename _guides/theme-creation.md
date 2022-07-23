---
layout: documentation
title: Create a theme
description: Customize The Lounge using built-in theme support, and share themes with others
---

Themes for The Lounge are CSS files bundled in packages preferably hosted on [the npm registry](https://www.npmjs.com/search?q=keywords:thelounge-theme).  
Alternatively, packages from the local file system can be installed.

In a directory named after your new theme (for example, `thelounge-theme-foo`), start by creating a new package with the following command:

```
yarn init -y
```

This will create a `package.json` file that you must edit as such:

- Make sure `"name"` is the name of your package, `"thelounge-theme-foo"`
- Change the value of `"main"` to be `"package.json"`
- Add a `"keywords"` to make sure your theme is discoverable:
  ```json
  "keywords": [
    "thelounge",
    "thelounge-theme"
  ]
  ```
- Add a `"thelounge"` section with required metadata. `"css"` should be the your CSS file name, and `"name"` the display name to appear in the client settings:
  ```json
  "thelounge": {
    "css": "theme.css",
    "name": "Theme Name",
    "type": "theme"
  },
  ```

Although it is not required, we strongly recommend you also fill in the `"homepage"`, `"repository"`, and `"bugs"` sections.

For a comprehensive example, refer to the [`package.json` file of `thelounge-theme-solarized`](https://github.com/thelounge/thelounge-theme-solarized/blob/master/package.json).

## Shipping additional files in the theme

Optionally, you can distribute other files along with the theme stylesheet as follows:

```json
"thelounge": {
  "css": "theme.css",
  "name": "Theme Name",
  "type": "theme",
  "files": [
    "alternative-font.woff2",
    "sprites.png"
  ]
},
```

After installing the theme, these files will be available under `/packages/<package name>/<file-name>`.

```css
@font-face {
  font-family: "Alternative Font Name";
  src: url(/packages/<package name>/alternative-font.woff2) format("woff2");
}
```

## Advanced configuration

Alternatively to the `"thelounge"` section in `package.json`, it is possible to point `"main"` to a JavaScript file that exports an object containing the same information as above:

```js
module.exports = {
  thelounge: {
    css: "theme.css",
    name: "Theme Name",
    type: "theme"
  }
};
```

{% include abbreviations.md %}
