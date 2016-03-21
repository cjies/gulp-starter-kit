// *************************************
//
//   JSON Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gulpif from 'gulp-if';
import jsonminify from 'gulp-jsonminify';
import browserSync from 'browser-sync';
import handleErrors from '../util/handleErrors';

gulp.task('json', () => {
    return gulp.src(config.json.src)
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(jsonminify())
        .pipe(gulp.dest(config.json.dest))
        .pipe(gulpif(
            global.isWatching,
            browserSync.stream({ once: true })
        ));
});
