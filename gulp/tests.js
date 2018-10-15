import karma from 'karma'
import path from 'path'
import gutil from 'gulp-util'

const KarmaServer = karma.Server

export function unitTests(done, watch, paths) {

  console.log('watching', watch);

  const server = new KarmaServer({
    configFile: path.resolve('.') + '/' + paths.test.karmaConf,
    singleRun: !watch,
    autoWatch: watch,
  }, function() {
    done()
  });

  server.on('browser_error', function(browser, err) {
    gutil.log(err)
    gutil.log('Karma Run Failed: ' + err.message)
    if (!watch) {
      process.exit(1)
    }
    throw err
  });

  server.on('run_complete', function(browsers, results) {
    if (results.failed && !watch) {
      process.exit(1);
      throw new Error('Karma: Tests Failed');
    }
    gutil.log('Karma Run Complete: No Failures')
  });

  server.start()
}
