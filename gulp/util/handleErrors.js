// *************************************
//
//   Handle Erros
//
// *************************************

import gutil from 'gulp-util';
import notify from 'gulp-notify';

export default function (error) {
    if (!global.isProd) {
        const args = Array.prototype.slice.call(arguments);

        // Show error log
        gutil.log(gutil.colors.grey(error.message));

        // Show notification
        notify.logLevel(0);
        notify.onError({
            title: `[${error.relativePath}] Error`,
            message: '<%= error.messageOriginal %>',
            sound: 'Pop'
        }).apply(this, args);

        // Keep gulp from hanging on this task
        this.emit('end');
    } else {
        console.log(error);
        process.exit(1);
    }
}

