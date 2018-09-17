
import webpack from 'webpack'
import pagesConfig from './pages.config'

const plugins = () => ({

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ].concat(pagesConfig)
});

export default plugins
