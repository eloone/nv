var server = require('./server')
   , app = require('http').createServer(server)
   , PORT = process.env.PORT || 5000;

app.listen(PORT);

console.log('Server running on localhost:'+PORT);
