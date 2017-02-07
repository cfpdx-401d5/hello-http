const http = require('http');
const url = require('url');
const qs = require('querystring');

// const server = new http.Server();
// server.on('request', (err, res) => {

// })

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url);
    const query = qs.parse(parsedURL.query);
    console.log(query);

    if (req.method === 'POST') {
        res.end('not accepting posts at this time');

    } else if(req.method === 'GET') {
        if(query.format === 'json') {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: 'hello world' }));
        } 
        else {
            res.end('hello world!');
        }
    } else {
        res.statusCode = 404;
        res.end(`http method ${req.method} not supported`);
    }
})

module.exports = server;