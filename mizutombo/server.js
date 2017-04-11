const server = require('./lib/http-server');
const port = 3000;

server.listen(port, err => {
	if(err) console.log('error', err);
	else console.log('http server listening on port ', port);
});