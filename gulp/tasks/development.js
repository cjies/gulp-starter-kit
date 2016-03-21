// *************************************
//
//   Development Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', [], (cb) => {
    global.isProd = false;
    runSequence(config.tasks.dev, 'watch', cb);
});
