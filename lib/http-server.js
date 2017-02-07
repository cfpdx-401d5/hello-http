const http = require('http');
const url = require('url');
const qs = require('querystring');
const cowsay = require('cowsay');

let facts = [
    'The H in HTTP stands for Hyper.\n', 
    'The first T in HTTP stands for text.\n', 
    'The second T in HTTP stands for Transfer.\n', 
    'The P in HTTP stands for Protocol.\n'
    ];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const query = qs.parse(parsedUrl.query);

    var greetingPath = parsedUrl.pathname;
    var path = greetingPath.split('/');

    if (req.method === 'GET') {

        if (path[1] === 'greeting') {
            var greeting = 'hello';
            var name = 'stranger';
            if (path[2]) { name = path[2]; }
            if (query.salutation) { greeting = query.salutation; }
            if (query.format === 'cowsay') {
                res.end(cowsay.say({
                    text: `${greeting} ${name}`
                }));
            }
            res.end(`${greeting} ${name}`);

        } else if (path[1] === 'facts') {

            res.end(`${facts}`)

        } else {
            res.end('please start path with "/greeting" or "/facts" to get response')
        }

    } else if (req.method === 'POST') {
        let fact = '';

        req.on('data', data => {
            fact += data;
        });

        req.on('end', () => {
            if (!fact) {
                res.statusCode = 400;
                res.end(`please send valid fact`);
            } else {
                facts.push(fact);
                res.statusCode = 201;
                res.end(`${fact}`);
            }
        });

    } else {
        res.statusCode = 404;
        res.end(`CANNOT ` + req.method + ' ' + parsedUrl.path);
    }

});

module.exports = server;