const http = require('http');
const url = require('url');
const greet = require('./greet');
const qs = require('querystring');
const fact = require('./interestingFact');

function parsePath(path, args) {
    const newPath = path.split('?');

    switch (newPath[0]) {
        case '/':
            return 'Hello world!';
            break;

        case '/greet':
            return greet(args);
            break;

        case '/fact':
            return "Development of HTTP was initiated by Tim Berners-Lee at CERN in 1989.";
            break;

        case '/facts':
            return fact.sendFacts();
            break;
    }
}



const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.path;
    const query = qs.parse(parsedUrl.query);

    function receiveData(req, callback) {
        let body = '';
        req.setEncoding('utf8');

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            let data = callback(body);
            let dataString = JSON.stringify(data);

            res.end(dataString);
        });
    }


    switch (req.method) {
        case 'POST':
            if (path === '/facts') {
                receiveData(req, fact.addFacts);
                break;
            } else {
                res.statusCode = 404;
                res.end('CANNOT ' + req.method + ' at ' + parsedUrl.path);
                break;
            }

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
            let getResponse = parsePath(path, query);
            res.end(getResponse);
            break;
        default:
            res.statusCode = 404;
            res.end('This request is not supported.');
    }

});

module.exports = server;