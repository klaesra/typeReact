'use strict';

const path = require('path');
const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

module.exports = {
	cache: true,
	entry: {
		main: './src/index.tsx',
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

	resolve: {
		// Add typescript files as resolveable
		extensions: ["", 'webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
	},

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
				loader: 'babel?cacheDirectory'
			}
		],

		preLoaders: [
			{ test: /\.js$/, loader: 'source-map-loader' }
		]
	}
};