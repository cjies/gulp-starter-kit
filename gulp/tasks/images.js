// *************************************
//
//   Images Task
//
// *************************************

import config from '../config';
import changed from 'gulp-changed';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import filter from 'gulp-filter';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';

gulp.task('images', () => {
    // Filtering
    const f = filter(config.images.filter, { restore: true });

    return gulp.src(config.images.src)
        .pipe(changed(config.images.dest)) // Ignore unchanged files
        .pipe(f) // Filtering
        .pipe(gulpif(global.isProd, imagemin(config.images.imagemin))) // Optimize
        .pipe(f.restore)
        .pipe(gulp.dest(config.images.dest))
        .pipe(gulpif(
            global.isWatching,
            browserSync.stream({ once: true })
        ));
});
