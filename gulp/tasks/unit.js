'use strict';

var config = require('../config');
var gulp   = require('gulp');
var Server = require('karma').Server;

gulp.task('unit', function (cb) {

  new Server({
    configFile: '../../../' + config.test.karma,
    singleRun: false,
    autoWatch: true
  }, cb).start();

});