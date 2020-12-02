const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../../out"),
    filename: "links.js",
  },
  module: {
    rules: [
      { test: /\.hbs$/i, loader: "handlebars-loader" },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              generator: (content) => svgToMiniDataURI(content.toString()),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "links.css" }),
    new HtmlWebpackPlugin({
      filename: "links.html",
      template: "./src/index.hbs",
      templateParameters: {
        title: "Marcelo Reis - Links",
        links: [
          {
            name: "LinkedIn",
            slug: "linkedin",
            href: "https://www.linkedin.com/in/marcelreis/",
          },
          {
            name: "GitHub",
            slug: "github",
            href: "https://github.com/MarcelReis/",
          },
          {
            name: "Instagram",
            slug: "instagram",
            href: "https://www.instagram.com/_marcelreis/",
          },
          {
            name: "Twitter",
            slug: "twitter",
            href: "https://twitter.com/_marcelreis",
          },
          {
            name: "Portfolio",
            slug: "portfolio",
            href: "https://marcelreis.dev",
          },
        ],
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
