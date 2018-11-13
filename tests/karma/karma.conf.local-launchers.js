export default function () {

  return {
    browsers: [
      //'Chrome',
      'Firefox',
      //'HeadlessChrome'
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
