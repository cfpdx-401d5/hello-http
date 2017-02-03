const http = require('http');
const url = require('url');
const qs = require('querystring');
const parseUrl = require('url').parse;
const cowsay = require('cowsay');

const server = http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url);
	const query = qs.parse(parsedUrl.query);
	console.log(query);

	if (req.method === 'GET') {

		if (req.url === '/greeting/<name>') {
			// var splitName = req.url.split('/');
			var splitName = req.url.split('/');
			var name = splitName[1];
			res.end(`hello  + ${name}`);
		}		
		// else {	
		// 	res.end('hello stranger');
		// }

		// if (req.url === '/<salutation>/<name>') {

		// }
		
		// if (req.url === '/greeting/<name>') {

			// if 
			// res.end('hello stranger');

			
			// if (query.format === 'json') {
			// 	res.setHeader('Content-Type', 'application/json');
			// 	res.end(JSON.stringify({message: 'hello stranger'}));
			// }

			// else {
			// 	res.end('hello stranger');
			// }
		// }

		if (req.url === '/fact') { // this code works!!!
			res.end('HTTP is short for hyper-text transfer protocol');
		}

		if (req.url === '/') { // this code works!!!
			res.statusCode = 404;
			res.end('404 - Not Found');
		}

		else {	
			res.end('hello stranger');
		}
	}
	
	
	if (req.method !== 'GET') { // this code works!!!
		res.statusCode = 404;
		res.end(`404 - http method ${req.method} is not supported`);
	}


});

module.exports = server;