'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var browserSync    = require('browser-sync');
var changed        = require('gulp-changed');
var gulpif         = require('gulp-if');
var plumber        = require('gulp-plumber');
var htmlmin        = require('gulp-htmlmin');
var handleErrors   = require('../util/handleErrors');

gulp.task('html', function() {

  return gulp.src(config.html.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'HTML');
      this.emit('end');
    }}))
    .pipe(gulpif(
      global.isProd, 
      htmlmin(config.html.htmlmin)
    ))
    .pipe(gulp.dest(config.html.dest))
    .pipe(gulpif(
      global.isWatching, 
      browserSync.stream({ once: true })
    ));

});