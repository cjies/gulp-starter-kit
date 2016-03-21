// *************************************
//
//   Production Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('prod', [], (cb) => {
    global.isProd = true;
    runSequence(config.tasks.prod, cb);
});
