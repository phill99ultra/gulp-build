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
import { scss } from './gulp/tasks/style.js';
import { script } from './gulp/tasks/script.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { sprite } from './gulp/tasks/svg_sprite.js';

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
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.script, script);
    gulp.watch(path.watch.images, images);
}

export { sprite };

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, script, images));
const runInBrowserTasks = gulp.parallel(watch, server);

// building a task execution script
const dev = gulp.series(clean, mainTasks, runInBrowserTasks);

// default script execution 
gulp.task('default', dev);