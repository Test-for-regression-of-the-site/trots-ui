const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const log = require('lighthouse-logger');

// function create report ligthose
function launchChromeAndRunLighthouse(url, opts, config = 0) {
    return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
        opts.port = chrome.port;
        return lighthouse(url, opts, config).then(results => {
            return chrome.kill().then(() => results.lhr)
        });
    });
}

// option setting chrome
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

// function generate id
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// generate id
const id = makeid(13)
// connect to nats
const stan = require('node-nats-streaming').connect('test-cluster', id, {url: 'nats://192.168.12.164:4223',
    stanMaxPingOut: 3, stanPingInterval: 20000});
    
stan.on('connect', function () {
    // Subscriber can specify how many existing messages to get.
    const optsNats = stan.subscriptionOptions();
    optsNats.setStartWithLastReceived()
    optsNats.setDurableName('my-durable');
    optsNats.setManualAckMode(true);
    optsNats.setAckWait(10*30000);
    optsNats.setMaxInFlight(1);

    // create subscription 
    const subscription = stan.subscribe('lighthouse', 'lighthouse.workers', optsNats);
    subscription.on('message', function (msg) {
        // get json 
        const getUrl = JSON.parse(msg.getData());
        console.log(getUrl, id);
        (async function getReport() {
            for( let i = 1; i <= getUrl.number; i++){
                await launchChromeAndRunLighthouse(getUrl.url, opts).then(results => {
                    log.setLevel(opts.logLevel);
                    console.log('report is done');
                    stan.publish('report', JSON.stringify(results), function(err, guid){
                        if(err) {
                        console.log('publish failed: ' + err);
                        } else {
                        console.log('published message with guid: ' + guid);
                        }
                    });
                })
            }
        })().then(() => msg.ack())
    });
    subscription.on('connection_lost', function(error) {
            console.log('disconnected from stan', error);
    });
    subscription.on('error', (err) => {
        console.log(`subscription for lighthouse raised an error: ${err}`);
    });
    subscription.on('unsubscribed', () => {
        console.log(`unsubscribed to lighthouse`);
    });
});

stan.on('close', function() {
  process.exit();
});