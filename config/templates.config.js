
import path from 'path'
import fs from 'fs'
import { VueLoaderPlugin } from 'vue-loader'

const getDirs = (basePath) => {
  const files = fs.readdirSync(basePath)
  return files.filter(item => !path.extname(item)).map(folder => path.resolve(__dirname, `../${basePath}/${folder}`))
}

const templates = (layouts, partials) => ({

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.ts', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
})

export default templates
