
import path from 'path'
import fs from 'fs'

const getDirs = (basePath) => {
  const files = fs.readdirSync(basePath)
  return files.filter(item => !path.extname(item)).map(folder => path.resolve(__dirname, `../${basePath}/${folder}`))
}

const templates = (layouts, partials) => ({

  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
            query: {
              partialDirs: [].concat(
                getDirs(layouts),
                getDirs(partials),
                getDirs(`${partials}/patterns/form`)
              )
            }
          }
        ]
      }
    ]
  }
})

export default templates
