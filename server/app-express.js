var path = require('path');
var express = require('express');
var http = require('http');
var app = express();
var PORT = process.env.PORT || 5000;
var marketsData = require('./trades.json');
var userData = require('./user.json');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
// Expose static content.
app.use(express.static(path.join(__dirname, '..')));

app.get('/api/users/:id', serveUserWebservice);
app.get('/api/trade-activity', serveMarketsWebservice);
app.post('/api/login', serviceLogin);

app.get('*', serveIndex);

function serveIndex(req, res) {
  	res.sendFile(path.join(__dirname, '..', 'app', 'index.html'));
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

// Create and expose server.
var server = app.listen(PORT);

// Log when server is started.
server.on('listening', function () {
  console.log('Server started http://localhost:%d/', server.address().port);
});