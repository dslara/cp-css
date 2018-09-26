
import path from 'path'
import PATHS from './paths.config'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'

const devServer = (port = 3333, proxy = 8080) => ({

  devServer: {
    port: proxy,
    publicPath: '/',
    contentBase: [
      path.resolve(__dirname, `../${PATHS.SRC}`)
    ],
    watchContentBase: true,
    hotOnly: true,
    overlay: true,
    stats: 'errors-only'
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: port,
        proxy: `http://localhost:${proxy}/`,
        open: false,
        files: [
          path.resolve(__dirname, `../${PATHS.SRC}/**/*.scss`),
          path.resolve(__dirname, `../${PATHS.SRC}/**/*.js`),
          path.resolve(__dirname, `../${PATHS.SRC}/**/*.json`)
        ]
      },
      {
        reload: false
      }
    ),
  ]
});

export default devServer
