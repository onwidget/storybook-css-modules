module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",

    // Basic addon initialization
    "storybook-css-modules",

    // Initialization with options
    // {
    //   name: "storybook-css-modules",
    //   options: {
    //     cssModulesLoaderOptions: {
    //       importLoaders: 1,
    //       modules: {
    //         localIdentName: "[hash:base64:5]",
    //       },
    //     },
    //   },
    // },
  ],
  "framework": "@storybook/preact"
}