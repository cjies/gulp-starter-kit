// *************************************
//
//   Eslint Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import eslint from 'gulp-eslint';
import handleErrors from '../util/handleErrors';

gulp.task('eslint', () => {
    return gulp.src(config.scripts.src)
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});
