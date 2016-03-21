// *************************************
//
//   Devlopment Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import watch from 'gulp-watch';

gulp.task('watch', ['browserSync'], () => {
    global.isWatching = true;

    // ForEach Task
    const watchTasks = config.tasks.watch;
    watchTasks.forEach((task) => {
        watch(config[task].src, () => {
            gulp.start([task]);
        });
    });
});
