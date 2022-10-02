import replace from 'gulp-replace'; // search and replace
import plumber from 'gulp-plumber'; // errors processing
import notify from 'gulp-notify'; // clues
import browserSync from 'browser-sync'; // local server

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync
}