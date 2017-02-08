const http = require('http');
const url = require('url');
const qs = require('querystring');
// const parseUrl = require('url').parse;

const cowsay = require('cowsay');

const server = http.createServer((req, res) => {
	
	const parsedUrl = url.parse(req.url); // parses URL ... path & querystring
	const query = qs.parse(parsedUrl.query); // qs.parse method converts querystring into object to enable access to parameters

	const facts = ['http is short for hyper-text transfer protocol', 'https is secure http'];

	var splitUrlPath = parsedUrl.pathname.split('/'); // splits out path
	var greeting = splitUrlPath[1];
	var name = splitUrlPath[2]; // in case 'name' exists after 'greeting' path segment
	
	// query.salutation;
	
	if ( req.method === 'GET' ) {

		if ( req.url === '/' ) {
			res.end('404 - Not Found ... try adding "/greeting" to this url');
		}
		else if ( req.url === '/facts' ) {
			res.end(JSON.stringify(facts));
		}
		else if ( splitUrlPath[1] === 'greeting' && (!splitUrlPath[2]) )  {
			if ( query.salutation ) {
				res.end(`${query.salutation} stranger`);
			}
			else res.end('hello stranger');
		}
		else if ( splitUrlPath[1] === 'greeting' && 'name') {
			if ( query.salutation ) {
				res.end(`${query.salutation} ${name}`);
			}
			else res.end(`hello ${name}`);		
		}		


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


	}
	else if ( req.method === 'POST' ) {
		if (req.url === '/facts') {
			let newFact = '';
			req.on('input', input => {
				newFact += input;
			});
			req.on('end', () => {
				facts.push(newFact);
				res.end(newFact);
			});
		}
	}
		
	else {
		res.end(`404 - http method ${req.method} is not supported`);
	}

});

module.exports = server;