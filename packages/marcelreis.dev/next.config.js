/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  env: {
    GA_TOKEN: process.env.GA_TOKEN,
  },
  webpack: function (config) {
    config.resolve.alias["components"] = path.resolve(
      __dirname,
      "src/components/"
    );

    return config;
  },
};
