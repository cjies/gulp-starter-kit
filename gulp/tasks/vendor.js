'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var plumber      = require('gulp-plumber');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var sourcemaps   = require('gulp-sourcemaps');
var minifyCss    = require('gulp-minify-css');
var header       = require('gulp-header');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var pkg          = require('../../package.json');


// -------------------------------------
//   Vendor Scripts
// -------------------------------------

gulp.task('vendorScripts', function () {
  return gulp.src(config.vendor.scripts.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Vendor Script');
      this.emit('end');
    }}))
    .pipe(concat(config.vendor.scripts.output))
    .pipe(uglify())
    .pipe(gulpif(global.isProd, 
      header(config.banner.header, {pkg: pkg}) 
    )) // Header Banner
    .pipe(gulp.dest(config.vendor.scripts.dest));
});


// -------------------------------------
//   Vendor Styles
// -------------------------------------

gulp.task('vendorStyles', function () {
  return gulp.src(config.vendor.styles.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Vendor Styles');
      this.emit('end');
    }}))
    .pipe(concat(config.vendor.styles.output))
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulpif(global.isProd, 
      header(config.banner.header, {pkg: pkg}) 
    )) // Header Banner
    .pipe(gulp.dest(config.vendor.styles.dest));
});


// -------------------------------------
//   Combined Vendors
// -------------------------------------

gulp.task('vendor', ['vendorScripts', 'vendorStyles']);
