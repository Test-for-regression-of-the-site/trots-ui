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
				"1602675700000": [
					{
						"id": "14352435446546",
						"url": "test",
						"performance": 10,
						"accessibility": 30,
						"bestPractices": 60,
						"seo": 80,
						"progressiveWebApp": 100
					},
					{
						"id": "14352435446541",
						"url": "test",
						"performance": "87",
						"accessibility": "87",
						"bestPractices": "87",
						"seo": "87",
						"progressiveWebApp": "87"
					},
					{
						"id": "14352435446542",
						"url": "test",
						"performance": "87",
						"accessibility": "87",
						"bestPractices": "87",
						"seo": "87",
						"progressiveWebApp": "87"
					},
					{
						"id": "14352435446543",
						"url": "test",
						"performance": "87",
						"accessibility": "87",
						"bestPractices": "87",
						"seo": "87",
						"progressiveWebApp": "87"
					},
					{
						"id": "14352435446543",
						"url": "test",
						"performance": "87",
						"accessibility": "87",
						"bestPractices": "87",
						"seo": "87",
						"progressiveWebApp": "87"
					},
					{
						"id": "14352435446543",
						"url": "test",
						"performance": "87",
						"accessibility": "87",
						"bestPractices": "87",
						"seo": "87",
						"progressiveWebApp": "87"
					}
				]
			},
			{
				"1602676700000": [
					{
						"id": "14352435446546",
						"url": "test",
						"performance": "87",
						"accessibility": "87",
						"bestPractices": "87",
						"seo": "87",
						"progressiveWebApp": "87"
					}
				]
			},
			{
				"1602677700000": [
					{
						"id": "14352435446546",
						"url": "test",
						"performance": "87",
						"accessibility": "87",
						"bestPractices": "87",
						"seo": "87",
						"progressiveWebApp": "87"
					}
				]
			}
		]
	}
	req.status(200).send(result)
})

app.get('/1602675700000/14352435446546', function(req, res) {
	const test = [];
	const reportResult = fs.readFileSync('./reports/testresult1.json', 'utf8');
	test.push(reportResult)
	res.status(200).send(test)
});

app.listen(2020, function () {
  	console.log('Example app listening on port 2020!');
});