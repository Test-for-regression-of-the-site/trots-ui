var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());


app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/getJson', function(req, res){
    const reportResult = fs.readFileSync('./reports/testresult.json', 'utf8');
    res.status(200).send(reportResult)
});

app.listen(2020, function () {
  console.log('Example app listening on port 2020!');
});