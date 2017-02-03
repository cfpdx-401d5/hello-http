const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const query = qs.parse(parsedUrl.query);
    console.log('the query is..', query);

    if(req.method === 'GET') {
        if(query.format === 'json') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: 'reached res.end'}));
        } else {
            res.end('the query.format is not json')
        }
    }
    // continue here
})

module.exports = server;