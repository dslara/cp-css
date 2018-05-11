
const files = [
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
    test: /\.(jpg|png|gif)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "assets/images/[name].[ext]"
        }
      }
    ]
  }
]

module.exports = files;
