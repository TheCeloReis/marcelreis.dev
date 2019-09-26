const webpack = require("webpack");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  webpack: config => {

    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },

  exportPathMap: function() {
    return {
      "/": { page: "/" },
    };
  },
};
