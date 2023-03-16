const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/app.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve('./dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|png|svg|gif)$/,
				loader: 'url-loader',
				options: {
					publicPath: './dist',
          name: '[name].[ext]?[hash]',
          limit: 10000
				},
			},
			// {
			// 	test: /\.(jpg|png|svg|gif)$/,
			// 	loader: 'file-loader',
			// 	options: {
			// 		publicPath: './dist/images',
			// 		outputPath: './images',
			// 		name: '[name].[ext]?[hash]',
			// 	},
			// },
		],
	},
};
