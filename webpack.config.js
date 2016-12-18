'use strict';

const path = require('path');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

module.exports = {
	cache: true,
	entry: {
		main: './src/index.tsx', // main is [name] for filename in output
		vendor: [
			'babel-polyfill',
			'reasonable-router',
			'react',
			'react-dom'
		]
	},
	output: {
		path: path.resolve(__dirname, './dist/scripts'),
		filename: '[name].js',
		chunkFilename: '[chunkhash].js',
		publicPath: '/',
	},

	//Enable sourcemaps
	devtool: "source-map",
	// plugins: [
	// 	new UglifyJsPlugin({
	// 		sourceMap: true
	// 	})
	// ],

	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader?cacheDirectory!ts-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader?cacheDirectory'
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'source-map-loader'
			}
		],
	},

	resolve: {
		// options for resolving module requests
		// (does not apply to resolving to loaders)

		modules: [
			"node_modules",
			path.resolve(__dirname, "src/modules")
		],
		// directories where to look for modules

		// Add typescript files as resolveable
		extensions: ['webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.css', '.json'],
		// extensions that are used

		alias: {
			// a list of module name aliases

			"aphrodite$": "aphrodite/no-important",
			// alias "only-module" -> "new-module", but not "module/path/file" -> "new-module/path/file"
		},
	},

	watchOptions: {
		aggregateTimeout: 100,
		poll: 200,
		ignored: /node_modules/,
	},
};