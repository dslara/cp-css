
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages = require('./webpack.config.pages');

module.exports = {
  entry: {
    app:  ['./src/app.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader" ,
        options: { presets: ['es2015'] }
      },
      {
        test: /\.woff2$/,
        loader: 'file-loader?name=fonts/[name].woff2'
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?[name].ico'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [
            path.join(__dirname, '../src', 'layouts'),
            path.join(__dirname, '../src', 'components'),
            path.join(__dirname, '../src', 'pages')
          ]
        }
      }
    ]
  },
  plugins: []
};

let renderedPages = [];

for (let i = 0; i < pages.length; i++) {
  let page = Object.assign({}, pages[i]);

  renderedPages.push(
    new HtmlWebpackPlugin({
      template: page.template,
      filename: page.output,
      title: page.content.title,
      description: page.content.description
    })
  );
}

module.exports.plugins = module.exports.plugins.concat(renderedPages)
