module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},

	//Enable sourcemaps
	devtool: "source-map",

	resolve: {
		// Add typescript files as resolveable
		extensions: ["", 'webpack.js', '.web.js', '.ts', '.tsx', '.js']
	},

	module: {
		loaders: [
			{ test: /\.tsx$/, loader: 'ts-loader' }
		],

		preLoaders: [
			{ test: /\.js$/, loader: 'source-map-loader' }
		]
	},

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	},
};