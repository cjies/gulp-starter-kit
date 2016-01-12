'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var browserSync    = require('browser-sync');
var changed        = require('gulp-changed');
var gulpif         = require('gulp-if');
var plumber        = require('gulp-plumber');
var minifyHTML     = require('gulp-minify-html');
var handleErrors   = require('../util/handleErrors');

gulp.task('html', function() {

  return gulp.src(config.html.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'HTML');
      this.emit('end');
    }}))
    .pipe(gulpif(
      global.isProd, 
      minifyHTML({
        empty: true,
        conditionals: true,
        spare: true
      })
    ))
    .pipe(gulp.dest(config.html.dest))
    .pipe(gulpif(
      global.isWatching, 
      browserSync.stream({ once: true })
    ));

});