// *************************************
//
//   Vendor Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import header from 'gulp-header';
import handleErrors from '../util/handleErrors';

import pkg from '../../package.json';

// -------------------------------------
//   Vendor Scripts
// -------------------------------------

gulp.task('vendorScripts', () => {
    return gulp.src(config.vendor.scripts.src)
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(concat(config.vendor.scripts.output))
        .pipe(uglify())
        .pipe(gulpif(
            global.isProd,
            header(config.banner.header, { pkg })
        ))
        .pipe(gulp.dest(config.vendor.scripts.dest));
});


// -------------------------------------
//   Vendor Styles
// -------------------------------------

gulp.task('vendorStyles', () => {
    return gulp.src(config.vendor.styles.src)
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(concat(config.vendor.styles.output))
        .pipe(postcss([cssnano(config.vendor.styles.cssnano)]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulpif(
            global.isProd,
            header(config.banner.header, { pkg })
        ))
        .pipe(gulp.dest(config.vendor.styles.dest));
});


// -------------------------------------
//   Combined Vendors
// -------------------------------------

gulp.task('vendor', ['vendorScripts', 'vendorStyles']);
