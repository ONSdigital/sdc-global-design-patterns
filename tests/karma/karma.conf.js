module.exports = function(config) {
  var testDir = 'tests/karma'

  config.set({

    basePath: './../../',

    client: {
      mocha: {
        timeout: 4000
      }
    },

    frameworks: ['browserify', 'mocha', 'chai-sinon', 'chai'],

    files: [
      './assets/js/api/_load.js',
      './assets/js/**/*.spec.js',
      './components/**/*.spec.js',
      testDir + '/spec/**/*.js'
    ],

    preprocessors: {
      './assets/js/api/_load.js': ['browserify'],
      'tests/karma/spec/**/*.js': ['browserify'],
      './components/**/*.spec.js': ['browserify'],
      './assets/js/**/*.spec.js': ['browserify'],
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-browserify',
      'karma-mocha',
      'karma-chai-sinon',
      'karma-chai',
      'karma-coverage'
    ],

    browserify: {
      debug: true,
      transform: ['babelify'],
      paths: ['./node_modules', './assets/js/', 'components/']
    },

    reporters: ['mocha', 'progress', 'coverage'],

    browsers: ['Chrome', 'HeadlessChrome'],

    customLaunchers: {
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },

    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: 'lcov' },
        { type: 'cobertura', subdir: 'cobertura' }
      ]
    },


    mochaReporter: {
      output: 'full'
    },

    colors: true,
    logLevel: config.LOG_DEBUG
  })
}
