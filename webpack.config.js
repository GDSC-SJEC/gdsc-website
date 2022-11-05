const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		home: ['./src/index.js'],
	},
	output: {
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader, // instead of style-loader
					'css-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css',
			chunkFilename: '[id].css',
		}),
	],
};
