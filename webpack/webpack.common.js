const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: [paths.appIndexJs],
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
        include: paths.appSrc
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Expensify App',
      template: paths.appHtml
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProgressPlugin()
  ]
};
