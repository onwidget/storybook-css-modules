# Storybook CSS Modules preset &middot; [![npm package](https://img.shields.io/npm/v/storybook-css-modules?color=green&label=npm&style=flat-square)](https://www.npmjs.com/package/storybook-css-modules)

Storybook preset addon to add _CSS Modules_ capabilities

<br />

## Installation

```sh
npm install -D storybook-css-modules
```

<br />

## Basic usage

Next, update `.storybook/main.js` to the following:

```js
// .storybook/main.js

module.exports = {
  stories: [
    // ...
  ],
  addons: [
    // Other Storybook addons

    "storybook-css-modules", // 👈 The addon registered here
  ],
};
```

By default this preset configured _CSS Modules_ with this options:

```json
{
  "importLoaders": 1,
  "modules": {
    "localIdentName": "[path][name]__[local]--[hash:base64:5]"
  }
}
```

If you need specific different options, override this in `.storybook/main.js` using _cssModulesLoaderOptions_, example:

```js
// .storybook/main.js

const { getLocalIdentName } = require("css-loader-shorter-classnames");
const getLocalIdent = getLocalIdentName();

module.exports = {
  stories: [
    // ...
  ],
  addons: [
    // Other Storybook addons

    {
      name: "storybook-css-modules",
      options: {
        cssModulesLoaderOptions: {
          importLoaders: 1,
          modules: {
            getLocalIdent,
          },
        },
      },
    },
  ],
};
```
