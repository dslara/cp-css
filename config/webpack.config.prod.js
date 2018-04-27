
const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            {
              loader: 'postcss-loader', options: {
                config: {
                  path: './config/postcss.config.js'
                },
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('main.[contenthash].css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        drop_console: true
      }
    }),
  ]
});

