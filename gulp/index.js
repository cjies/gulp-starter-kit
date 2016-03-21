// *************************************
//
//   Main Entry for gulp tasks
//
// *************************************

import fs from 'fs';
import gulp from 'gulp';
import onlyScripts from './util/scriptFilter';

const tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

gulp.on('stop', () => {
    if (!global.isWatching) {
        process.nextTick(() => {
            process.exit(0);
        });
    }
});

tasks.forEach((task) => {
    require(`./tasks/${task}`);
});
