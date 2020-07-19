/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require("@zeit/next-sass");
const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[hash:base64:5]",
    modules: true,
  },

  webpack: function (config) {
    config.resolve.alias["components"] = path.resolve(
      __dirname,
      "src/components/"
    );

    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },
});
