import gulp from 'gulp';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import plumber from 'gulp-plumber';
import cssnano from 'gulp-cssnano';
import del from 'del';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import pseudoelements from 'postcss-pseudoelements';
import pixrem from 'pixrem';
import inlineblock from 'postcss-inline-block';
import gutil from 'gulp-util';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';

import rollupBabel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import fractal from './fractal.js';
const logger = fractal.cli.console;

/*
 * An example of a Gulp task that starts a Fractal development server.
 */

gulp.task('fractal:start', function() {
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

gulp.task('fractal:build', function() {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
});

/* CSS */

gulp.task('css:process', function() {
  return gulp.src('assets/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber({
        errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(sassGlob())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded',
      sourceComments: false,
      onSuccess: function(msg) {
        gutil.log('Done', gutil.colors.cyan(msg));
      }
    }))
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 2 versions', 'Explorer >= 8', 'Android >= 4.1', 'Safari >= 7', 'iOS >= 7']
      }),
      pixrem({ replace: false }),
      inlineblock(),
      pseudoelements()
      // reporter({ clearMessages: true })
    ]))
    .on('error', err => console.log(err.message))
    // .pipe(sourcemaps.write('.'))
    // .pipe(gulp.dest('public/assets/css'))
    // .pipe(rename, { suffix: '.min' })
    .pipe(cssnano({
      calc: false,
      discardComments: { removeAll: true }
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/assets/css'));
});

gulp.task('css:clean', function() {
  return del(['public/assets/css']);
});

gulp.task('css:watch', function(done) {
  gulp.watch([
    'assets/sass/**/*.scss',
    'components/**/*.scss',
  ], gulp.series('css'));
  done();
});

gulp.task('css', gulp.series('css:clean', 'css:process'));

gulp.task('clean:dist', () => {
  del.sync([
    paths.output
  ], { force: true })
})

// Remove pre-existing content from text folders
gulp.task('clean:test', () => {
  del.sync([
    paths.test.coverage,
    paths.test.results
  ], { force: true })
})

/* Scripts */

gulp.task('scripts:clean', function() {
  return del(['public/assets/scripts']);
});

const bundleScripts = watch => {
  let cache;
  const bundler = browserify({
    entries: ['./assets/js/components.js'],
    debug: true,
    plugin: [(watch ? watchify : null)]
  })
  .on('update', () => bundle())
  .on('log', gutil.log)
  .on('error', gutil.log)
  .transform('rollupify', {
    config: {
      cache: cache,
      entry: './assets/js/components.js',
      plugins: [
        commonjs({
          include: 'node_modules/**',
          namedExports: {
            'node_modules/events/events.js': Object.keys(require('events'))
          }
        }),
        nodeResolve({
          jsnext: true,
          main: true,
          preferBuiltins: false
        }),
        rollupBabel({
          plugins: ['lodash'],
          presets: ['es2015-rollup', 'stage-2'],
          babelrc: false,
          exclude: 'node_modules/**'
        })
      ]
    }
  });
  const bundle = () => {
    return bundler.bundle()
      .on('error', function(err) {
        gutil.log(err.message);
        this.emit('end');
      })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(gulp.dest('public/assets/scripts'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('public/assets/scripts'));
  };

  return bundle();
};

gulp.task('scripts:bundle', () => bundleScripts(false));

gulp.task('scripts', gulp.series('scripts:clean', 'scripts:bundle'));

gulp.task('scripts:watch', () => bundleScripts(true));

/* Fonts */

gulp.task('fonts:copy', function() {
  return gulp.src('assets/fonts/**/*')
    .pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('fonts:clean', function(done) {
  return del(['public/assets/fonts'], done);
});

gulp.task('fonts', gulp.series('fonts:clean', 'fonts:copy'));

gulp.task('fonts:watch', function(done) {
  gulp.watch('assets/fonts/**/*', gulp.parallel('fonts'));
  done();
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

gulp.task('images:watch', function(done) {
  gulp.watch('assets/img/**/*', gulp.parallel('images'));
  done();
});

gulp.task('default', gulp.parallel('css', 'scripts', 'fonts', 'images'));
gulp.task('watch', gulp.parallel('css:watch', 'scripts:watch', 'fonts:watch', 'images:watch'));
gulp.task('clean', gulp.parallel('css:clean', 'scripts:clean', 'fonts:clean', 'images:clean'));
gulp.task('dev', gulp.series('default', 'fractal:start', 'watch',));

