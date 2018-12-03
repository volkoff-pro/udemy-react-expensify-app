const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        loader: require.resolve('eslint-loader'),
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        options: {
          cache: true,
          fix: true,
          eslintPath: require.resolve('eslint'),
          failOnError: true,
          failOnWarning: true
        },
        include: path.resolve(__dirname, 'src')
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'Expensify App',
      template: 'src/index.html'
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
};
