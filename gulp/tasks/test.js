// *************************************
//
//   Test Task
//
// *************************************

import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('test', [], () => {
    return runSequence('unit');
});
