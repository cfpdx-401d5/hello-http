const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');

var facts = [];

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // take the url from the request and parse it into host/port/path/query/etc
    const parsedUrl = url.parse(req.url);
    // parse the url query string into key:value pairs
    const query = qs.parse(parsedUrl.query);
    // break the parts of the pathname into an array
    // returns['', '1st', '2nd', etc]
    const pathnameParts = parsedUrl.pathname.split('/');


    if (req.method === 'GET') {
        if (!pathnameParts[1]) { // === 'GET/'
            res.end('Try adding "greeting/<name>" or "fact" in the path.');
        }
        // responds with an interesting fact about http if the method is GET and the url (path) is `/fact`
        else if (pathnameParts[1].toLowerCase() === 'fact') {
            res.end('from Wikipedia:\nThe first version of the protocol had only one method, namely GET, which would request a page from a server. \nThe response from the server was always an HTML page.');
        }
        // responds with a greeting if url (path) is /greeting/<name>
        // if name is not included, use "stranger"
        else if (pathnameParts[1].toLowerCase() === 'greeting' && (!pathnameParts[2])) {
            // if query string specifies `salutation` use that for the greeting salutation, otherwise `hello`
            if ((query.salutation)) {
                res.end(`${query.salutation} stranger!`);
            }
            else res.end('Hello stranger!');
        }
        else if (pathnameParts[1].toLowerCase() === 'greeting' && (pathnameParts[2])) {
            if ((query.salutation)) {
                res.end(`${query.salutation} ${pathnameParts[2].charAt(0).toUpperCase() + pathnameParts[2].slice(1)}!`);
            }
            else {
                res.end(`Hello ${pathnameParts[2].charAt(0).toUpperCase() + pathnameParts[2].slice(1)}!`);
            }
        }
        else if (pathnameParts[3]) {
            res.end('You have gone down a path unexplored, brave one.');
        }

        // if(query.format === 'json') {
        //     res.setHeader('Content-Type', 'application/json');
        //     res.end(JSON.stringify({message: 'reached res.end'}));
        // } else {
        //     // res.setHeader('Content-Type', 'text/html');
        //     res.end('the query.format is not json')
        // }
    }
    else if (req.method === 'POST') {
        // Add a post method for the /facts route that adds the posted body 
        // (if it exists) to the in-memory fact array
        if (req.url === '/facts') {
            let fact = '';

            req.on('data', data => {
                fact += data;
            }).on('end', () => {
                facts.push(fact);
                // The post should return the same info that was posted.
                res.end(fact);
            });
            // req.pipe(res); // this also returns the same info that was posted

        }
        else { // POST goes to somewhere other than '/facts'
            res.statusCode = 400;
            res.end('Try making a post to "/facts"');
        }
    }
    else { //req.method === PUT || DELETE || etc.
        // return status code 404 Not Found
        res.statusCode = 404;
        // text: 'CANNOT <verb> <path>'
        res.end(`${res.statusCode} Not Found. CANNOT ${req.method} ${req.url.split('?')[0]}`);
    }

})

module.exports = server;