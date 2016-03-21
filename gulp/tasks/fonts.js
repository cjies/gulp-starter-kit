// *************************************
//
//   Fonts Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import changed from 'gulp-changed';
import browserSync from 'browser-sync';

gulp.task('fonts', () => {
    return gulp.src(config.fonts.src)
        .pipe(changed(config.fonts.dest))
        .pipe(gulp.dest(config.fonts.dest))
        .pipe(gulpif(
            global.isWatching,
            browserSync.stream({ once: true })
        ));
});
