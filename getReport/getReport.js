
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const log = require('lighthouse-logger');
const fetch = require('node-fetch');

function launchChromeAndRunLighthouse(url, opts, config = 0) {
    return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
        opts.port = chrome.port;
        return lighthouse(url, opts, config).then(results => {
            return chrome.kill().then(() => results.lhr)
        });
    });
}

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
// wait the end of each function 
(async function getReport() {
    // get array url
    const getUrl = await fetch('https://www.skoda-avto.ru/sitemap.xml').then(res=> res.text()).then(res => {
        const array = res.split('www.skoda-avto.ru').map(item => {return `https://www.skoda-avto.ru${item.split('</loc>')[0]}`})
        return array
    })
    // get the number of links
    const numberLinks = Math.round(getUrl.length);
    let result = [];
    for( let i = 1; i < numberLinks*1 ; i++){
        await launchChromeAndRunLighthouse(getUrl[i], opts).then(results => {
            log.setLevel(opts.logLevel);
            console.log('report is done');
            result.push(results)
        })
    }
    fs.writeFileSync(`./reports/testresult1.json`, JSON.stringify(result));
    return result
})()