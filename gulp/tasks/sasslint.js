// *************************************
//
//   sasslint Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sasslint from 'gulp-sass-lint';
import handleErrors from '../util/handleErrors';

gulp.task('sasslint', () => {
    return gulp.src(config.sass.src)
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(sasslint())
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError());
});
