import webpack from "webpack-stream";

export const script = () => {
    return app.gulp.src(app.path.src.script, { sourcemap: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(webpack({
            mode: "development",
            output: {
                filename: "main.min.js"
            }
        }))
        .pipe(app.gulp.dest(app.path.build.script))
        .pipe(app.plugins.browserSync.stream());
}