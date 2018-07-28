
import PATHS from './paths.config'

const files = () => ({
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        options: {
          limit: '8192',
          name: '[name].[ext]',
          outputPath: PATHS.FONTS
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "file-loader",
        exclude: /node_modules/,
        options: {
          name: "[name].[ext]",
          outputPath: PATHS.IMG
        }
      }
    ]
  }
})

export default files
