
const gulp = require('gulp')
const gulpsync = require('gulp-sync')(gulp)

// svg optimized, then turned into icon font, then turned into scss file
const svgmin = require('gulp-svgmin')
const iconfont = require('gulp-iconfont')
const iconfontCss = require('gulp-iconfont-css')

const fontName = 'a-icons'
const cssClass = 'a-icon'

gulp.task('svgmin', function () {
  return gulp.src(['svg/*.svg'])
    .pipe(svgmin(
      {
        plugins: [{
          transformsWithOnePath: true
        }, {
          cleanupEnableBackground: true
        }, {
          removeUnknownsAndDefaults: true
        }]
      }
    ))
    .pipe(gulp.dest('svg/optimized/'))
})

gulp.task('iconfont-vars', function () {
  return gulp.src(['svg/optimized/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: '_vars.pseudo-scss',
      targetPath: '../../../_vars.scss',
      cssClass: cssClass
    }))
    .pipe(iconfont({
      fontName: fontName, // required
      prependUnicode: true, // recommended option
      formats: ['woff', 'woff2'], // default, 'woff2' and 'svg' are available
      centerHorizontally: true,
      fontHeight: 500,
      descent: 80
    }))
    .on('glyphs', function (glyphs, options) {})
    .pipe(gulp.dest('assets/fonts/a-icons/'))
})

gulp.task('iconfont-mixins', function () {
  return gulp.src(['svg/optimized/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: '_mixins.pseudo-scss',
      targetPath: '../../../_mixins.scss',
      cssClass: cssClass
    }))
    .pipe(iconfont({
      fontName: fontName, // required
      prependUnicode: true, // recommended option
      formats: ['woff', 'woff2'], // default, 'woff2' and 'svg' are available
      centerHorizontally: true,
      fontHeight: 500,
      descent: 80
    }))
    .on('glyphs', function (glyphs, options) {})
    .pipe(gulp.dest('assets/fonts/a-icons/'))
})

gulp.task('iconfont-main', function () {
  return gulp.src(['svg/optimized/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: '_main.pseudo-scss',
      targetPath: '../../../_main.scss',
      cssClass: cssClass
    }))
    .pipe(iconfont({
      fontName: fontName, // required
      prependUnicode: true, // recommended option
      formats: ['woff', 'woff2'], // default, 'woff2' and 'svg' are available
      centerHorizontally: true,
      fontHeight: 500,
      descent: 80
    }))
    .on('glyphs', function (glyphs, options) {})
    .pipe(gulp.dest('assets/fonts/a-icons/'))
})

gulp.task('default', gulpsync.sync(['svgmin', 'iconfont-vars', 'iconfont-mixins', 'iconfont-main']))
