// *************************************
//
//   Jade Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gulpif from 'gulp-if';
import gdata from 'gulp-data';
import jade from 'gulp-jade';
import filter from 'gulp-filter';
import handleErrors from '../util/handleErrors';
import browserSync from 'browser-sync';

gulp.task('jade', () => {
    // Filtering out partials (folders and files starting with "_" )
    const f = filter((file) => {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
    }, { restore: true });

    return gulp.src(config.jade.src)
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(gulpif(
            config.jade.locals,
            gdata(() => require(`../../${config.jade.locals}`))
        ))
        .pipe(jade({
            pretty: global.isProd ? '' : '  '
        }))
        .pipe(gulpif(!config.jade.underscore, f)) // Filtering
        .pipe(gulp.dest(config.jade.dest))
        .pipe(gulpif(!config.jade.underscore, f.restore))
        .pipe(browserSync.stream({
            once: true
        }));
});
