const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const log = require('lighthouse-logger');

const opts = {
    output: 'json',
    chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-translate', '--disable-extensions'],
    emulatedFormFactor: ['desktop'],
    logLevel: 'info',
    view: true,
    throttlingMethod: 'simulate',
    throttling: {
        throughputKbps: 30000,
        downloadThroughputKbps: 30000,
        uploadThroughputKbps: 30000
    }
};


function launchChromeAndRunLighthouse(url, opts, config = 0) {
    return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
        opts.port = chrome.port;
        return lighthouse(url, opts, config).then(results => {
            return chrome.kill().then(() => results.lhr)
        });
    });
}

launchChromeAndRunLighthouse('https://www.skoda-avto.ru/', opts).then(results => {
    log.setLevel(opts.logLevel);
    fs.writeFile(`./reports/testresult1.json`, JSON.stringify(results), err => {
      if (err) throw err;
    });
}).catch(e => {
    console.log(e)
})
