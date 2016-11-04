import gulp from 'gulp'
import sass from 'gulp-sass'
import sassGlob from 'gulp-sass-glob'
import del from 'del'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import pseudoelements from 'postcss-pseudoelements'

import fractal from './fractal.js'
const logger = fractal.cli.console;

/*
 * An example of a Gulp task that starts a Fractal development server.
 */

gulp.task('fractal:start', function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.urls.sync.local}`);
    });
});

/*
 * An example of a Gulp task that to run a static export of the web UI.
 */

gulp.task('fractal:build', function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});

/* CSS */

gulp.task('css:process', function() {
  return gulp.src('assets/sass/styles.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 2 versions', 'Explorer >= 8', 'Android >= 4.1', 'Safari >= 7', 'iOS >= 7']
      }),
      pseudoelements(),
    ]))
    .on('error', err => console.log(err.message))
    .pipe(gulp.dest('public/assets/css'));
});

gulp.task('css:clean', function() {
    return del(['public/assets/css']);
});

gulp.task('css:watch', function () {
    gulp.watch([
        'assets/sass/**/*.scss',
        // 'components/**/*.scss'
    ], gulp.series('css'));
});

gulp.task('css', gulp.series('css:clean', 'css:process'));


/* Fonts */

gulp.task('fonts:copy', function() {
  return gulp.src('assets/fonts/**/*')
    .pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('fonts:clean', function(done) {
    return del(['public/assets/fonts'], done);
});

gulp.task('fonts', gulp.series('fonts:clean', 'fonts:copy'));

gulp.task('fonts:watch', function() {
    gulp.watch('assets/fonts/**/*', gulp.parallel('fonts'));
});

/* Images */

gulp.task('images:copy', function() {
  return gulp.src('assets/img/**/*')
    .pipe(gulp.dest('public/assets/img'));
});

gulp.task('images:clean', function(done) {
    return del(['public/assets/img'], done);
});

gulp.task('images', gulp.series('images:clean', 'images:copy'));

gulp.task('images:watch', function() {
    gulp.watch('assets/img/**/*', gulp.parallel('images'));
});


gulp.task('default', gulp.parallel('css', 'fonts', 'images'));
gulp.task('watch', gulp.parallel('css:watch', 'fonts:watch', 'images:watch'));

gulp.task('dev', gulp.series('default', 'fractal:start', 'watch'));
