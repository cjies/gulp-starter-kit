'use strict';

var path         = require('path');
var gulpConfig   = require('../gulp/config.js');

module.exports = function (config) {

  var vendorFiles = gulpConfig.vendor.scripts.src;
  var srcFiles = [];
  var testFiles = vendorFiles.concat(srcFiles);

  config.set({
    basePath: path.resolve(__dirname, '../'),
    urlRoot: '/__karma__/',

    singleRun: true,
    autoWatch: true,

    frameworks: [],
    browsers: ['PhantomJS'],
    reporters: [
      'mocha', 
      'notify', 
      // 'coverage'
    ],

    // Preprocessor
    preprocessors: {
      'src/!(static|locales)/**/!(*spec).js': ['coverage']
    },

    // Istanbuk Reporter
    coverageReporter: {
      type : 'html',
      dir : 'tests/coverage/'
    },

    // Notify Reporter
    notifyReporter: {
      reportEachFailure: true,
      reportSuccess: false,
    },

    // Test Files
    files: testFiles
  });

};