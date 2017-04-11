const http = require('http');
const url = require('url');
const qs = require('querystring');
// const parseUrl = require('url').parse;

const cowsay = require('cowsay');

const facts = ['http is short for hyper-text transfer protocol', 'https is secure http'];

const server = http.createServer((req, res) => {
	
	const parsedUrl = url.parse(req.url); // parses URL ... path & querystring
	const query = qs.parse(parsedUrl.query); // qs.parse method converts querystring into object to enable access to parameters

	var splitUrlPath = parsedUrl.pathname.split('/'); // splits out path
	var greeting = splitUrlPath[1];
	var name = splitUrlPath[2]; // in case 'name' exists after 'greeting' path segment
	
	// query.salutation;
	
	if ( req.method === 'GET' ) {

		if ( req.url === '/' ) {
			res.statusCode = 404;
			res.end('Not Found ... try adding "/greeting" to this url');
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
	}	
	
	// 	else if( splitUrlPath[1] === 'greeting' && 'name' ) {
	// 		if ( query.format && query.salutation ) {
	// 			res.write(cowsay.say({
	// 				text: `moo moo ${query.salutation} ${name} !!!`,
	// 				e: '@@',
	// 				T: 'U '
	// 			}));
	// 		}
	// 	}
	// }
	
	else {
		res.statusCode = 404;
		res.end(`http method ${req.method} is not supported`);
	}

});

module.exports = server;