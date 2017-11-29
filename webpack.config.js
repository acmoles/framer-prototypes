var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src/',
  devtool: 'source-map',
  entry: 'app.coffee',
  module: {
    rules: [
        {
          test: /\.coffee$/,
          use: 'coffee-loader',
	  exclude: /(node_modules)/,
        },
        {
          test: /\.(coffee\.md|litcoffee)$/,
          use: 'coffee-loader?literate',
	  exclude: /(node_module)/,
        },
    ],
  },
  output: {
    path: __dirname + '/build',
    filename: 'app.[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'UX Framer Prototype',
      template: __dirname + '/src/index.html',
    }),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, '/src/modules/'),
      'node_modules'
    ],
    extensions: ['.web.coffee', '.web.js', '.coffee', '.js'],
  }
};
