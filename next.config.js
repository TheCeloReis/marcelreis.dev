/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[hash:base64:5]",
    modules: true,
  },

  webpack: function (config) {
    config.resolve.alias["styles"] = path.resolve(
      __dirname,
      "src/styles/modules/"
    );
    config.resolve.alias["components"] = path.resolve(
      __dirname,
      "src/components/"
    );

    return config;
  },
});
