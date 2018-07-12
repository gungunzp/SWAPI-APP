const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const common = {
	entry: ['babel-polyfill', './src/index.js'],
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract('css-loader!sass-loader')
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				use: 'file-loader?limit=1000&name=img/[name]-[hash].[ext]'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/style.css'),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		require('copy-webpack-plugin')([
			{
				from: 'node_modules/normalize.css/normalize.css',
				to: 'css/normalize.css'
			}
		])
	]
};

module.exports = (env, options) => {
	const PROD = options.mode === 'production';
	common.devtool = PROD ? 'source-map' : 'eval-source-map';
	return common;
};
