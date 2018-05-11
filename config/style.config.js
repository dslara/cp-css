
const path = require('path');

const styles = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: (loader) => [
          require('postcss-cssnext')(),
          require('postcss-initial')()
        ]
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

module.exports = styles;
