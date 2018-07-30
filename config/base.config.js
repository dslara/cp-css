
import path from 'path'
import PATHS from './paths.config'

const base = () => ({
  entry: {
    main: [
      path.resolve(__dirname, `../${PATHS.SRC}/app.js`),
      path.resolve(__dirname, `../${PATHS.SRC}/modules/main.scss`)
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, `../${PATHS.DIST}`),
    publicPath: '/'
  }
});

export default base
