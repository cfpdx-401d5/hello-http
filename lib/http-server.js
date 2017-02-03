const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // take the url from the request and parse it into host/port/path/query/etc
    const parsedUrl = url.parse(req.url);
    // parse the url query string into key:value pairs
    const query = qs.parse(parsedUrl.query);
    // break the parts of the pathname into an array
    // returns['', '1st', '2nd', etc]
    const pathnameParts = parsedUrl.pathname.split('/'); 
    console.log('the query is..', query);
    console.log('url..', req.url);
    console.log('pnpts..', pathnameParts[1]);

    if(req.method === 'GET') {
        if(pathnameParts[0] === '') {
            res.end('Try adding "greeting/<name>" in the path');
        } 
        else if (pathnameParts[1] === 'greeting'){ //&& (!pathnameParts[2])) {
            res.end('Hello stranger!');
        }

        
        // if(query.format === 'json') {
        //     res.setHeader('Content-Type', 'application/json');
        //     res.end(JSON.stringify({message: 'reached res.end'}));
        // } else {
        //     // res.setHeader('Content-Type', 'text/html');
        //     res.end('the query.format is not json')
        // }
    }
    else { //req.method === POST || PUT || DELETE || etc.
        // return status code 404 Not Found
        res.statusCode = 404;
        // text: 'CANNOT <verb> <path>'
        res.end(`${res.statusCode} Not Found. CANNOT ${req.method} ${req.path}`);
    }

})

module.exports = server;