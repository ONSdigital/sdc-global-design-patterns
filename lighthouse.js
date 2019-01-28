const fs = require('fs');
const path = require('path');
const express = require('express');
const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const ReportGenerator = require('lighthouse/lighthouse-core/report/report-generator');
const cheerio = require('cheerio');

const numberOfChromeInstances = 25;
const port = process.env.PORT || 3000;
const distDir = path.join(__dirname, '/dist');
const previewDir = `${distDir}/components/preview`;
const reportDir = `${distDir}/components/report`;
const detailDir = `${distDir}/components/detail`;

process.setMaxListeners(Infinity);

const start = Date.now();

// Boot Express server
const app = express();
app.set('port', port);
app.use('/', express.static(distDir));

const server = app.listen(port, () => {
  console.log('Server started');

  const previewFiles = getPreviewURLs();
  launchChrome(previewFiles);
});

function getPreviewURLs() {
  return fs.readdirSync(previewDir);
}

function makeReportsDir() {
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir);
  }
}

function launchChrome(previewFiles) {
  const numberOfPreviews = previewFiles.length;
  const chromeInstances = [];

  const audits = new Promise(resolve => {
    (async () => {
      // Start chrome instances
      console.log(`Booting ${numberOfChromeInstances} Chrome instances`)
      for (let i = 0; i < numberOfChromeInstances; i++) {
        await puppeteer.launch().then(chrome => chromeInstances.push({
          available: true,
          chrome,
          port: (new URL(chrome.wsEndpoint())).port
        }));
      }

      let index = 0;
      let numberAudited = 0;

      async function next() {
        if (index < numberOfPreviews) {
          const chromeInstance = chromeInstances.find(instance => instance.available);
          chromeInstance.available = false;

          const flags = {
            port: chromeInstance.port,
            onlyCategories: ['accessibility']
          };

          const file = previewFiles[index];
          console.log(`Auditing ${file} (${index + 1} of ${numberOfPreviews})`);

          const result = lighthouse(`http://localhost:${port}/components/preview/${file}`, flags).then(async (result) => {
            chromeInstance.available = true;
            const html = ReportGenerator.generateReport(result.lhr, 'html').replace('.lh-header-sticky {', '.lh-header-sticky {\n  display: none;');

            fs.writeFileSync(`${reportDir}/${file}`, html, error => {
              if (error) {
                return console.log(error);
              }
            });

            // Read detail template
            await readFileAsync(`${detailDir}/${file}`).then(data => {
              const $ = cheerio.load(data);

               // Add an accessibility tab if one doesn't exist
              const id = $('.Browser-tab--html a').attr('href').replace('panel-html', '').replace('#', '');

              if ($('.Browser-tab--a11y').length === 0) {
                $('.Browser-tabs').append(`<li class="Browser-tab Browser-tab--a11y" data-role="tab"><a href="#${id}-panel-a11y"></a></li>`);

                $('.Browser').append(`<div class="Browser-panel Browser-a11y" id="${id}-panel-a11y" data-role="tab-panel"><iframe class="Preview-iframe" data-role="window" src="../report/${file}" sandbox="allow-same-origin allow-scripts allow-forms" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0" scrolling="yes"></iframe></div>`);
              }

              // Put accessibility score in tab heading
              $('.Browser-tab--a11y a').html(`Accessibility (${result.lhr.categories.accessibility.score * 100}%)`);

              fs.writeFileSync(`${detailDir}/${file}`, $.html(), error => {
                if (error) {
                  return console.log(error);
                }
              });
            });
            numberAudited++;
            next();
          });

          index++;
          return result;
        } else if (numberAudited === numberOfPreviews) {
          resolve();
        }
      }

      makeReportsDir();

      while (index < numberOfChromeInstances && index < numberOfPreviews) {
        next();
      }
    })();
  }).then(async () => {
    server.close();

    console.log('Finished auditing');
    console.log('Shutting down chrome instances');

    let index = 0;
    const shutDownPromises = [];

    while (index < numberOfChromeInstances) {
      shutDownPromises.push(chromeInstances[index].chrome.close());
      index++;
    }

    Promise.all(shutDownPromises).then(() => {
      const elapsedSeconds = (Date.now() - start) / 1000;
      const elapsedMins = Math.floor(elapsedSeconds / 60);
      const remainderSeconds = Math.round(elapsedSeconds - (elapsedMins * 60));
      console.log(`Lighthouse audits took ${elapsedMins}min ${remainderSeconds}secs`);
      process.exit();
    });
  });
}

function readFileAsync(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}
