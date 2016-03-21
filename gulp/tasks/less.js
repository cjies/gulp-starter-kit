// *************************************
//
//   LESS Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import sourcemaps from 'gulp-sourcemaps';
import header from 'gulp-header';
import handleErrors from '../util/handleErrors';
import browserSync from 'browser-sync';

import pkg from '../../package.json';
// const pkg = require('../../package.json');

gulp.task('less', () => {
    const createSourceMap = global.isProd || config.less.sourcemap;

    return gulp.src(config.less.src)
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(gulpif(createSourceMap, sourcemaps.init()))
        .pipe(less())
        .pipe(postcss([
            autoprefixer(config.less.autoprefixer)
        ]))
        .pipe(gulpif(
            global.isProd,
            postcss([cssnano(config.less.cssnano)])
        ))
        .pipe(gulpif(
            createSourceMap,
            sourcemaps.write(createSourceMap ? '.' : null)
        ))
        .pipe(gulpif(global.isProd,
            header(config.banner.header, { pkg })
        )) // Header Banner
        .pipe(gulp.dest(config.less.dest))
        .pipe(gulpif(
            global.isWatching,
            browserSync.stream({
                match: '**/*.css'
            })
        ));
});

