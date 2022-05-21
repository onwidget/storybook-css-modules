const defaultOptions = {
  default: {
    importLoaders: 1,
    modules: {
      localIdentName: "[path][name]__[local]--[hash:base64:5]",
    },
  },
  vue3: {
    modules: {
      localIdentName: "[path][name]__[local]--[hash:base64:5]",
    },
  }
}

export async function webpackFinal(config = {}, options = {}) {
  const { module = {} } = config;
  const { framework } = options;

  const {
    cssModulesLoaderOptions = defaultOptions[framework] || defaultOptions.default,
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

  switch (framework) {
    case "vue3":
      cssLoaderRule.use = cssLoaderRule.use.map((item) => {
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
      })

      break;
  
    default:
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
      break;
  }

  return newConfig;
}
