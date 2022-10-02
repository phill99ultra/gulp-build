import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import { copy } from './gulp/tasks/copy.js';

global.app = {
    path: path,
    gulp: gulp
}

// file change watcher
function watch() {
    gulp.watch(path.watch.files, copy)
}

// building a task execution script
const dev = gulp.series(copy, watch);

// default script execution 
gulp.task('default', dev);