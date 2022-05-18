const defaultOptions = {
  importLoaders: 1,
  modules: {
    localIdentName: "[path][name]__[local]--[hash:base64:5]",
  },
}

export async function webpackFinal(config = {}, options = {}) {
  const { module = {} } = config;

  const {
    cssModulesLoaderOptions = defaultOptions,
  } = options;

  const newConfig = {
    ...config,
    module: {
      ...module,
      rules: [...(module.rules || [])],
    },
  };

  const cssLoaderRule = newConfig.module.rules.find(
    (rule) => rule?.test?.toString() === "/\\.css$/"
  );

  if (cssLoaderRule) {
    newConfig.module.rules.push({
      ...cssLoaderRule,
      test: /\.module\.css$/,
      use: cssLoaderRule.use.map((item) => {
        if (item?.loader?.match(/[\/\\]css-loader/g)) {
          return {
            ...item,
            options: {
              ...item.options,
              ...cssModulesLoaderOptions,
            },
          };
        }
        return item;
      }),
    });

    cssLoaderRule.exclude = /\.module\.css$/;
  }

  return newConfig;
}
