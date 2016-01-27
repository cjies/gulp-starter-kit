'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');
var sourcemaps   = require('gulp-sourcemaps');
var header       = require('gulp-header');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');

var pkg          = require('../../package.json');

gulp.task('sass', function () {

  var createSourceMap = global.isProd || config.sass.sourcemap;

  return gulp.src(config.sass.src)
    .pipe(plumber({errorHandler: function(error) {
      gutil.log(gutil.colors.grey(error.message));
      handleErrors(error, 'SASS');
      this.emit('end');
    }}))
    .pipe(gulpif(createSourceMap, sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss([ 
      autoprefixer(config.sass.autoprefixer)
    ]))
    .pipe(gulpif(
      global.isProd, 
      postcss([ cssnano(config.sass.cssnano) ]) 
    ))
    .pipe(gulpif(
      createSourceMap, 
      sourcemaps.write(createSourceMap ? '.' : null)
    ))
    .pipe(gulpif(global.isProd, 
      header(config.banner.header, {pkg: pkg}) 
    )) // Header Banner
    .pipe(gulp.dest(config.sass.dest))
    .pipe(gulpif(
      global.isWatching, 
      browserSync.stream({
        match: '**/*.css'
      })
    ));

});
