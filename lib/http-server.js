const http = require('http');
const url = require('url');
const greet = require('./greet');
const qs = require('querystring');

function parsePath(path, args) {
    const newPath = path.split('?');

    console.log('newPath: ', newPath);
    switch (newPath[0]) {
        case '/':
            return 'Hello world!';
            break;

        case '/fact':
            return 'Development of HTTP was initiated by Tim Berners-Lee at CERN in 1989.';
            break;

        case '/greet':
            return greet(args);
            break;
    }
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.path;
    const query = qs.parse(parsedUrl.query);

    switch (req.method) {
        case 'POST':
            res.statusCode = 404;
            res.end('CANNOT ' + req.method + ' at ' + parsedUrl.path);
            break;
        case 'PATCH':
            res.statusCode = 404;
            res.end('CANNOT ' + req.method + ' at ' + parsedUrl.path);
            break;
        case 'PUT':
            res.statusCode = 404;
            res.end('CANNOT ' + req.method + ' at ' + parsedUrl.path);
            break;
        case 'DELETE':
            res.statusCode = 404;
            res.end('CANNOT ' + req.method + ' at ' + parsedUrl.path);;
            break;
        case 'GET':
            response = parsePath(path, query);
            res.end(response);
            break;
        default:
            res.statusCode = 404;
            res.end('This request is not supported.');
    }

});

module.exports = server;