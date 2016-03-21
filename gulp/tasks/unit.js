// *************************************
//
//   Unit Task (karma)
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import { Server } from 'karma';

gulp.task('unit', (cb) => {
    return new Server({
        configFile: `../../../${config.test.karma}`,
        singleRun: false,
        autoWatch: true
    }, cb).start();
});
