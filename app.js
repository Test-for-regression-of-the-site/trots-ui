var express = require('express');
var app = express();
var cors = require('cors')
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(cors())
app.use(bodyParser.json());

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Content-Type', 'application/json');
    next();
});

app.post('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/getJson', function(req, res){
		const test = [];
		const reportResult = fs.readFileSync('./reports/testresult1.json', 'utf8');
		test.push(reportResult)
		res.status(200).send(test)
});

app.get('/getJsonTest', function(req, res){
	const test = [];
	const reportResult = fs.readFileSync('./reports/testresult1.json', 'utf8');
	test.push(reportResult);
	test.push(reportResult);
	test.push(reportResult);
	const ansver = {
		'time1': test,
		'time2': test,
		'time3': test,
	}
	res.status(200).send(ansver)
});

app.post('/startTest', function(req, res) {
	console.log(req.body)
});

app.get('/tasks/dashboard', function(res, req) {
	const result = {
		"proccesEnd": false,
		"shortDashboard": [
			{
				"1602675700000a": {
					creationTime: '1602675700000',
					tests: [
						{
							"id": "14352435446546",
							"url": "https://google.com",
							"performance": 0.79,
							"accessibility": 0.9,
							"bestPractices": 0.92,
							"seo": 0.85,
							"progressiveWebApp": 0.54
						},
						{
							"id": "14352435446541",
							"url": "https://vk.com",
							"performance": 0.38,
							"accessibility": 0.67,
							"bestPractices": 0.01,
							"seo": 1,
							"progressiveWebApp": 0.82
						}
					]
				}
			},
			{
				"1602676700000b": {
					creationTime: 1602676700000,
					tests: [
						{
							"id": "14352435446541",
							"url": "https://vk.com",
							"performance": 0.38,
							"accessibility": 0.67,
							"bestPractices": 0,
							"seo": 1,
							"progressiveWebApp": 0.82
						}
					]
				}
			},
			{
				"1602677700000c":{
					creationTime: "1602677700000",
					tests: [
						{
							"id": "14352435446541",
							"url": "https://vk.com",
							"performance": 0.38,
							"accessibility": 0.67,
							"bestPractices": 0,
							"seo": 1,
							"progressiveWebApp": 0.82
						}
					]
				} 
			}
		]
	}
	req.status(200).send(result)
})

app.get('/1602675700000a/14352435446546', function(req, res) {
	const test = [];
	const reportResult = fs.readFileSync('./reports/testresult1.json', 'utf8');
	test.push(reportResult)
	res.status(200).send(test)
});

app.listen(2020, function () {
  	console.log('Example app listening on port 2020!');
});