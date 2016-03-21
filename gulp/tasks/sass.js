// *************************************
//
//   Sass Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import header from 'gulp-header';
import browserSync from 'browser-sync';
import handleErrors from '../util/handleErrors';

import pkg from '../../package.json';

gulp.task('sass', ['sasslint'], () => {
    const createSourceMap = global.isProd || config.sass.sourcemap;

    return gulp.src(config.sass.src)
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(gulpif(createSourceMap, sourcemaps.init()))
        .pipe(sass(config.sass.opt))
        .pipe(postcss([
            autoprefixer(config.sass.autoprefixer)
        ]))
        .pipe(gulpif(
            global.isProd,
            postcss([cssnano(config.sass.cssnano)])
        ))
        .pipe(gulpif(
            createSourceMap,
            sourcemaps.write(createSourceMap ? '.' : null)
        ))
        .pipe(gulpif(
            global.isProd,
            header(config.banner.header, { pkg })
        ))
        .pipe(gulp.dest(config.sass.dest))
        .pipe(gulpif(
            global.isWatching,
            browserSync.stream({
                match: '**/*.css'
            })
        ));
});
