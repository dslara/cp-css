
const path = require('path');
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pagesConfig = require('./config/pages.config');
const styleConfig = require('./config/style.config');
const fileConfig = require('./config/file.config');

const rootPath = './';
const srcPath = rootPath + 'src/';
const distPath = rootPath + 'dist/';
const docsPath = rootPath + 'dist/';

const styles = {
  test: /\.scss$/,
  use: [{loader: 'style-loader'}, MiniCssExtractPlugin.loader].concat(styleConfig)
};

const scripts = {
  test: /\.js$/,
  loader: "babel-loader",
  exclude: /node_modules/,
  options: { presets: ['env'] }
};

const templates = {
  test: /\.hbs$/,
  loader: 'handlebars-loader',
  query: {
    partialDirs: [
      path.join(__dirname, docsPath, 'layouts'),
      path.join(__dirname, srcPath, 'pages'),
    ]
  }
};

const baseConfig = {
  entry: {
    main: [
      srcPath + 'app.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, distPath),
    publicPath: '/'
  },
  devServer: {
    port: 3333,
    publicPath: '/',
    contentBase: path.resolve(__dirname, srcPath),
    watchContentBase: true,
    overlay: true,
    noInfo: true
  },
  devtool: 'eval',
  module: {
    rules: [
      scripts,
      styles,
      templates
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
    //new CleanWebpackPlugin(['./dist']),
  ]
}

baseConfig.plugins = baseConfig.plugins.concat(pagesConfig);
baseConfig.module.rules = baseConfig.module.rules.concat(fileConfig);

module.exports = baseConfig;
