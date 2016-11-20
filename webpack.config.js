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
			'react'
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

	module: {
		loaders: [
			{
				test: /\.ts(x)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader?cacheDirectory!ts-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader?cacheDirectory'
			}
		],

		preLoaders: [
			{ test: /\.js$/, loader: 'source-map-loader' }
		]
	},

	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
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
		extensions: ["", 'webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.css', '.json'],
		// extensions that are used

		alias: {
			// a list of module name aliases

			"aphrodite$": "aphrodite/no-important",
			// alias "only-module" -> "new-module", but not "module/path/file" -> "new-module/path/file"
		},
	},

	watchOptions: {
		aggregateTimeout: 100,
		poll: 300,
		ignored: /node_modules/,
	},

	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},

};