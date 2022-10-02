import gulp from 'gulp';

// import paths
import { path } from './gulp/config/path.js';
// import plugins
import { plugins } from './gulp/config/plugins.js';
// tasks
import { copy } from './gulp/tasks/copy.js';
import { clean } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';

// passing values ​​to global variable
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

// file change watcher
function watch() {
    gulp.watch(path.watch.assets, copy);
    gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);
const runInBrowserTasks = gulp.parallel(watch, server);

// building a task execution script
const dev = gulp.series(clean, mainTasks, runInBrowserTasks);

// default script execution 
gulp.task('default', dev);