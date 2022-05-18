module.exports = {
  stories: ["../stories/**/*.stories.@(js|mdx)"],
  addons: [
    '../../../dist/index.js',

    // {
    //   name: "../../../dist/index.js",
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
};
