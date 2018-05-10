
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const folderPath = './docs/pages/';
const EXTENSION = '.hbs';
const files = fs.readdirSync(folderPath);

let hbsFilter = (file) => path.extname(file).toLowerCase() === EXTENSION;
let hbsFiles = files.filter(hbsFilter);
let pages = [];

hbsFiles.forEach(file => {

  pages.push(
    new HtmlWebpackPlugin({
      template: folderPath + file,
      filename: path.basename(file, EXTENSION) + '.html'
    })
  );
})

module.exports = pages;
