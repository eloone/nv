var path = require('path');
var express = require('express');
var http = require('http');
var app = express();
var main = express();
var marketsData = require('./trades.json');
var userData = require('./user.json');
var bodyParser = require('body-parser');

module.exports.app = app;

app.use(bodyParser.json());
// Expose static content.
app.use('/nvision-front/', express.static(path.join(__dirname, '..')));

app.get('/api/users/:id', serveUserWebservice);
app.get('/api/trade-activity', serveMarketsWebservice);
app.post('/nvision-front/api/login', serviceLogin);

app.get('/nvision-front/*', serveIndex);

function serveIndex(req, res) {
  	res.sendFile(path.join(__dirname, '..', 'index.html'));
}

function serveMarketsWebservice(req, res) {
	res.send(marketsData);
}

function serveUserWebservice(req, res) {
    res.send(userData);
}

function serviceLogin(req, res) {
	if(req.body.email === 'admin@test.com' && req.body.password === 'admin') {
		res.send({
			authenticated: true
		});
	} else {
		res.send({
			authenticated: false
		});
	}
}
