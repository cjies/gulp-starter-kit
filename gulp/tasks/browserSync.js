// *************************************
//
//   BrowserSync Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import url from 'url';

gulp.task('browserSync', () => {
    const DEFAULT_FILE = 'index.html';
    const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

    browserSync.init({
        server: {
            baseDir: config.buildDir,
            middleware: (req, res, next) => {
                const fileHref = url.parse(req.url).href;
                if (!ASSET_EXTENSION_REGEX.test(fileHref)) {
                    req.url = `/${DEFAULT_FILE}`;
                }
                return next();
            }
        },
        port: config.browserPort,
        ui: {
            port: config.UIPort
        },
        logLevel: 'silent',
        ghostMode: false
    });
});
