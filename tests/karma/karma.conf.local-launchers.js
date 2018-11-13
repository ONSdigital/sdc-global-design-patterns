export default function () {

  return {
    browsers: [
      'Chrome',
      'HeadlessChrome'
    ],

    customLaunchers: {
      /**
       * Local
       */
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    }
  };
}
