// *************************************
//
//   Clean Build Directory
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import del from 'del';

gulp.task('clean', () => del([config.buildDir]));
