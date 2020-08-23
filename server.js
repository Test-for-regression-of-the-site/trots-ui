const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        const server = express()

        server.get('/p/:id', (req, res) => {
            const lighthouse = require('lighthouse');
            const chromeLauncher = require('chrome-launcher');
            const fs = require('fs');
            const log = require('lighthouse-logger');
            const NodeCache = require( "node-cache" );
        
            function launchChromeAndRunLighthouse(url, opts, config = 0) {
                return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
                    opts.port = chrome.port;
                    return lighthouse(url, opts, config).then(results => {
                        // get result
                        // res = results.report;
                        // reportResult.push(JSON.stringify(res));
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
                throttlingMethod: 'provided',
                throttling: {
                    throughputKbps: 512,
                    downloadThroughputKbps: 512,
                    uploadThroughputKbps: 512
                }
            };
            // read file and split in json
            const fileWithLinks = fs.readFileSync('./env/list', 'utf-8').split('\n');
            // wait the end of each function 
            const reportResult = (async ()=>{
                let result = [];
                for( let i = 0; i <fileWithLinks.length; i++){
                    await launchChromeAndRunLighthouse(fileWithLinks[i], opts).then(results => {
                        log.setLevel(opts.logLevel);
                        console.log('report is done');
                        result.push(results)
                    })
                }
                return result
            })()
            reportResult.then(function(result){
                res.status(200).json(result)
            });
        })

        server.listen(2020, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:2020')
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })