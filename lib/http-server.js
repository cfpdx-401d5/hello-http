const http = require('http');
const url = require('url');
const qs = require('querystring');
const parseUrl = require('url').parse;
const cowsay = require('cowsay');

const server = http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url);
	const query = qs.parse(parsedUrl.query); // object to enable access to parameters

	if (req.method === 'GET') {

		var splitUrl = req.url.split('/');
		var name = splitUrl[2];
		var altGreeting = splitUrl[3];

		if ( req.url === '/fact' ) { // this code works!!!
			res.end('HTTP is short for hyper-text transfer protocol');
		}

		if ( req.url === '/' ) { // this code works!!!
			res.end('404 - Not Found ... try adding "/greeting" to this url');
		}

		if ( splitUrl[1] === 'greeting' ) { // this code works for /greeting/<name> !!!			
			if (splitUrl[2]) {
				res.end(`hello ${name}`);
			}
			else {	
				res.end('hello stranger');
			}
		}

		if( splitUrl[1] === 'salutation' && splitUrl[2] && splitUrl[4] ) { // this code works for cowsay !!!
			if (splitUrl[4] === 'cowsay') {
				res.write(cowsay.say({
					text: `moo moo ${altGreeting} ${name} !!!`,
					e: '@@',
					T: 'U'
				}));
				res.end();
			}
		}

		if ( splitUrl[1] === 'salutation' && splitUrl[2] ) { // this code works for /salutation/<name>/<salutation> !!!
			res.end(`${altGreeting} ${name}`);
		}
		else {
			res.end(`${altGreeting} stranger`);
		}

	}
		
	if (req.method !== 'GET') { // this code works!!!
		res.end(`404 - http method ${req.method} is not supported`);
	}

});

module.exports = server;