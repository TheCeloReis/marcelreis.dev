const webpack = require("webpack");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	webpack: config => {
		config.module.rules.push({
			test: /\.md$/,
			use: "frontmatter-markdown-loader"
		});

		config.entry().then(entry => {
			return Object.assign({}, entry, { fooEntry: "./content" });
		});

		const env = Object.keys(process.env).reduce((acc, curr) => {
			acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
			return acc;
		}, {});

		config.plugins.push(new webpack.DefinePlugin(env));

		return config;
	}
};
