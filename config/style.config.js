
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import PATHS from './paths.config'

const plugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  allChunks: true
});

const styles = (env) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                require('postcss-cssnext')(),
                require('postcss-initial')()
              ]
            }
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              path: path.resolve(__dirname, `../${PATHS.DIST}`)
            }
          }
        ]
      }
    ]
  },
  plugins: [plugin]
})

export default styles
