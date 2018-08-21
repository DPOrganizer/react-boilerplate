const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		contentBase: './app',
		port: 8090,
		proxy: {
			'/api/*': {
				target: 'http://localhost:3000',
				pathRewrite: {
					'/api': '',
				},
			},
		},
	},
	entry: path.resolve(__dirname, 'app/main.jsx'),
	output: {
		path: `${__dirname}/build`,
		publicPath: '/',
		filename: './bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				include: path.resolve(__dirname, 'app'),
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
				],
			},
			{
				test: /\.js[x]?$/,
				include: path.resolve(__dirname, 'app'),
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:8090' }),
	],
};
