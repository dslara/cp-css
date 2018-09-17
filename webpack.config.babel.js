
import merge from "webpack-merge"
import base from './config/base.config'
import devServer from './config/server.config'
import styles from './config/style.config'
import files from './config/file.config'
import scripts from './config/scripts.config'
import templates from './config/templates.config'
import plugins from './config/plugins.config'
import PATHS from "./config/paths.config";

const productionConfig = merge([])

const developmentConfig = merge ([
  devServer()
]);

const commonConfig = (mode) => merge([
  base(),
  scripts(),
  files(),
  styles(mode),
  templates(PATHS.LAYOUTS, PATHS.PARTIALS),
  plugins()
])

const config = mode => {
  return merge((mode === 'production') ? productionConfig : developmentConfig, commonConfig(mode), { mode })
}

export default config
