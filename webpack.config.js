// const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const webpack = require('webpack');

const common = {
  // entry: path.join(__dirname, 'src', 'index.js'),
  // output: {
  //   path: 'public',
  //   filename: 'bundle.js',
  // },
  // entry: './src/index.js',
  // output: {
  //   path: './dist/',
  //   filename: 'main.js'
  // },
  // entry: [
    // 'react-hot-loader/patch',
    // './src/index.js'
  // ],
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   filename: 'bundle.js',
  //   publicPath: ''
  // },
  // entry: [
  //   'react-hot-loader/patch',
  //   './src/index.js'
  // ],
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  // entry: {
  //   app: [
  //     'babel-polyfill',
  //     './src/index.js'
  //   ],
  //   vendors: [
  //     'react',
  //     'react-dom'
  //   ],
  // },
  devServer: {
    overlay: true,
    // hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        // loaders: ['react-hot-loader/webpack', 'babel-loader']
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader",
      //       options: { minimize: true }
      //     }
      //   ]
      // },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        // use: [
        //   'style-loader',
        //   'css-loader',
        //   'sass-loader'
        // ],
        // use: ExtractTextPlugin.extract({
          // fallback: 'style-loader',
          // use: [
          //   'css-loader',
          //   'sass-loader'
          // ]
        // }),
        use: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        // exclude: /node_modules/,
        use: 'file-loader?limit=1000&name=img/[name]-[hash].[ext]'
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("css/style.css"),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    require('copy-webpack-plugin')([
      { from: 'node_modules/normalize.css/normalize.css', to: 'css/normalize.css' },
      // { from: 'src/fonts', to: 'fonts' }
    ]),
  ]
  // devtool: 'eval-sourcemap',
  // devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : 'source-map',
};

module.exports = (env, options) => {
  const PROD = options.mode === 'production';
  common.devtool = PROD ? 'source-map' : 'eval-source-map';
  // common.devtool = PROD ? false : 'eval-source-map';
  return common;
};