
const path = require('path');
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages = require('./config/config.pages');

const baseConfig = {
  entry: {
    main: [
      './src/app.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: "/"
  },
  devServer: {
    port: 3333,
    publicPath: '/',
    contentBase: path.resolve(__dirname, './src'),
    watchContentBase: true,
    overlay: true,
    noInfo: true
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['env']
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
        options: {
          name: '[name].[ext]',
          publicPath: "/modules/_core/assets/fonts/archivo_narrow/",
          outputPath: "assets/fonts/archivo_narrow/"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader', options: {
              config: {
                path: './config/postcss.config.js'
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              path: path.resolve(__dirname, 'cpcss'),
              data: "$core__path--fonts: '/assets/fonts';"
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [
            path.join(__dirname, './docs', 'layouts'),
            path.join(__dirname, './src', 'pages'),
          ]
        }
      }
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

baseConfig.plugins = baseConfig.plugins.concat(pages);

module.exports = baseConfig;
