import localLauncherConfig from './karma.conf.local-launchers';
import browserstackLaunchersConfig from './karma.conf.browserstack-launchers';

const {
  customLaunchers: localLaunchers,
  browsers: localBrowsers
} = localLauncherConfig();

const {
  customLaunchers: browserstackLaunchers,
  browsers: browserstackBrowsers
} = browserstackLaunchersConfig();

const isRunningOnTravis = process.env['RUNNING_ON_TRAVIS'];

module.exports = function(config) {
  var testDir = 'tests/karma';

  config.set({

    basePath: './../../',

    client: {
      mocha: {
        timeout: 4000
      }
    },

    frameworks: ['browserify', 'mocha', 'chai-sinon', 'chai', 'viewport'],

    files: [
      './assets/js/polyfills.js',
      './assets/js/api/_load.js',
      './assets/js/**/*.spec.js',
      './components/**/*.spec.js',
      testDir + '/spec/**/*.js'
    ],

    preprocessors: {
      './assets/js/polyfills.js': ['browserify'],
      './assets/js/api/_load.js': ['browserify'],
      './tests/karma/spec/**/*.js': ['browserify'],
      './components/**/*.spec.js': ['browserify'],
      './assets/js/**/*.spec.js': ['browserify'],
    },

    plugins: [
      'karma-browserstack-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-mocha-reporter',
      'karma-browserify',
      'karma-mocha',
      'karma-chai-sinon',
      'karma-chai',
      'karma-coverage',
      'karma-viewport'
    ],

    browserify: {
      debug: true,
      transform: ['babelify'],
      paths: ['./node_modules', './assets/js/', './components/']
    },

    reporters: ['mocha', 'progress', 'coverage', 'BrowserStack'],

    browsers: [
      ...(isRunningOnTravis ? browserstackBrowsers : localBrowsers)
    ],

    browserStack: {
      startTunnel: 'true',
      name: 'Karma unit tests',
      project: 'ONS - sdc-global-design-patterns',
      forcelocal: true
    },

    customLaunchers: {
      ...(isRunningOnTravis ? browserstackLaunchers : localLaunchers)
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
  });
};
