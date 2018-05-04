const path = require('path');
const rootPath = path.dirname(path.dirname(__dirname));

module.exports = {
    url: 'http://localhost:3000/components/preview/',
    defaults: {
        selectorExpansion: true,
        hideSelectors: [],
        removeSelectors: [],
        readyEvent: null,
        delay: 500,
        misMatchThreshold: 0.2,
        requireSameDimensions: true,
        selector: ['body']
    },
    config: {
        id: "eq_regression",
        viewports: [
            {
            name: "phone",
            width: 320,
            height: 1000
            },
            {
            name: "tablet_v",
            width: 568,
            height: 1000
            },
            {
            name: "desktop",
            width: 1200,
            height: 1000
            }
        ],
        scenarios: [],
        paths: {
            bitmaps_reference: "tests/backstop/bitmaps/reference",
            bitmaps_test: "tests/backstop/bitmaps/test",
            casper_scripts: "tests/backstop/casper_scripts",
            html_report: "tests/backstop/reports/html",
            ci_report: "tests/backstop/reports/ci"
        },
        casperFlags: [
            "--ignore-ssl-errors=true",
            "--ssl-protocol=any"
        ],
        engine: "phantomjs",
        report: ["browser"],
        cliExitOnFail: false,
        debug: false
    }
};