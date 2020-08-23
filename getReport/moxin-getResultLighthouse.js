// let mixinGetResultLighthouse = {
//     async getResult() {
//         const lighthouse = require('lighthouse');
//         const chromeLauncher = require('chrome-launcher');
//         const log = require('lighthouse-logger');
    
//         function launchChromeAndRunLighthouse(url, opts, config = 0) {
//             return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
//                 opts.port = chrome.port;
//                 return lighthouse(url, opts, config).then(results => {
//                     return chrome.kill().then(() => results.lhr)
//                 });
//             });
//         }
    
//         const opts = {
//             output: 'json',
//             chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-translate', '--disable-extensions'],
//             emulatedFormFactor: ['desktop'],
//             logLevel: 'info',
//             view: true,
//             throttlingMethod: 'provided',
//             throttling: {
//                 throughputKbps: 512,
//                 downloadThroughputKbps: 512,
//                 uploadThroughputKbps: 512
//             }
//         };
//         // wait the end of each function 
//         return await launchChromeAndRunLighthouse(this.url, opts).then(results => {
//             log.setLevel(opts.logLevel);
//             console.log('report is done');
//             return results
//         })
//     }
// }

// class getResultLighthouse {
//     constructor(url) {
//         this.url = url;
//     }
// }

// Object.assign(getResultLighthouse.prototype, mixinGetResultLighthouse);

// exports.modules = getResultLighthouse;