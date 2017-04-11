// my little server

// import a facts file?
// keep track of clients
const fs = require('fs');
const http = require('http');
const url = require('url');
const qs = require('querystring');
const cowsay = require('cowsay');
const factArray = ['Development of HTTP was initiated by Tim Berners-Lee at CERN in 1989',
    'H stands for Hyper', 'T stands for Text and Transfer', 'P stands for Protocol'
];


const server = http.createServer((req, res) => {

    //kind of like a constructor
    const parsedUrl = url.parse(req.url);
    const query = qs.parse(parsedUrl.query);
    const greetingPath = parsedUrl.path.split('?')[0];
    const path = greetingPath.split('/');

    let name = '';
    let greeting = '';

    if (req.method === 'GET') {
        if (path[1] === 'greeting') {
            greeting = 'hello';
            name = 'stranger';
            if (path[2]) { name = path[2]; }
            if (query.salutation) { greeting = query.salutation; }
            if (query.format === 'cowsay') {
                res.end(cowsay.say({ text: `${greeting } ${ name }` }));
            };
            res.end(`${greeting} ${name}`);
        } else if (path[1] === 'fact') {
            const fact = factArray[0];
            if (query.format === 'cowsay') {
                res.end(cowsay.say({ text: `${ fact }` }));
            }
            res.end(`${ fact }`);
        } else if (path[1] === 'facts') {
            const allFacts = JSON.stringify(factArray);

            res.end(allFacts);
        }

    } else if (req.method === 'POST') {
        let userFact = ''; //fact from user in chunks
        req.on('data', chunk => {
            userFact += chunk;
        });
        req.on('end', () => {
            userFact = JSON.parse(userFact);
            factArray.push(userFact.message);
            userFact = JSON.stringify(userFact.message);
            res.end(userFact);
        })
    } else {
        res.statusCode = 404;
        res.end('Cannot ' + req.method + ' ' + path[0]);
    }
});
module.exports = server;