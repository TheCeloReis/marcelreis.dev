const path = require("path");

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: function (config) {
    config.resolve.alias["components"] = path.resolve(
      __dirname,
      "src/components/"
    );

    return config;
  },
};
