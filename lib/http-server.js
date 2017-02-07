const http = require('http');
const url = require('url');
const qs = require('querystring');
// const parseUrl = require('url').parse;

const cowsay = require('cowsay');

const server = http.createServer((req, res) => {
	
	const parsedUrl = url.parse(req.url); // parses URL
	const query = qs.parse(parsedUrl.query); // object to enable access to parameters

	// var urlParams = new URLSearchParams(query); // eslint-disable-line

	const facts = ['http is short for hyper-text transfer protocol'];

	var splitUrlPath = req.url.split('/');
	var name = splitUrlPath[2]; // in case name exists after 'greeting' path segment

	
	if (req.method === 'GET') {

		if ( splitUrlPath === 'greeting' ) {
			res.end('hello stranger');
		}

		if ( splitUrlPath === 'greeting' && 'name') {
			res.end(`hello ${name}`);
		}

		if ( query.salutation = )

		// if ( url.pathname === 'greeting' && urlParams.has('salutation')) {
		// 	var altGreet = urlParams.get('salutation');
		// 	res.end(altGreet + ' stranger');
		// }

		// if ( url.pathname === 'greeting/' && urlParams.has('salutation')) {

		// }

		if (req.method === 'POST') {
			
		}

		if ( req.url === '/fact' ) {
			res.end('HTTP is short for hyper-text transfer protocol');
		}

		if ( req.url === '/' ) {
			res.end('404 - Not Found ... try adding "/greeting" to this url');
		}

		// if ( splitUrl[1] === 'greeting' ) { 			
		// 	if (splitUrl[2]) {
		// 		res.end(`hello ${name}`);
		// 	}
		// 	else {	
		// 		res.end('hello stranger');
		// 	}
		// }

		// if( splitUrl[1] === 'salutation' && splitUrl[2] && splitUrl[4] ) {
		// 	if (splitUrl[4] === 'cowsay') {
		// 		res.write(cowsay.say({
		// 			text: `moo moo ${altGreeting} ${name} !!!`,
		// 			e: '@@',
		// 			T: 'U '
		// 		}));
		// 		res.end();
		// 	}
		// }

		// if ( splitUrl[1] === 'salutation' && splitUrl[2] ) {
		// 	res.end(`${altGreeting} ${name}`);
		// }
		// else {
		// 	res.end(`${altGreeting} stranger`);
		// }

	}
		
	// if (req.method !== 'GET') {
	// 	res.end(`404 - http method ${req.method} is not supported`);
	// }

});

module.exports = server;