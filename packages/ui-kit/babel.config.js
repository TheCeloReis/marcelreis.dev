module.exports = {
  plugins: [["babel-plugin-styled-components", { namespace: "mr-ui" }]],
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
