/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
dotenv.config();

const staticRouter = require("./utils/staticRouter");

module.exports = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      content: path.resolve(__dirname, "content/"),
    };

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.md$/,
        use: "frontmatter-markdown-loader",
      },
    ];

    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },

  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/blog": { page: "/blog" },
      "/projects": { page: "/projects" },
      ...staticRouter.getProjects(),
    };
  },
};
