const http = require('http');
const url = require('url');
const qs = require('querystring');
const cowsay = require('cowsay');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const query = qs.parse(parsedUrl.query);
    
    var greetingPath = parsedUrl.path.split('?')[0];
    console.log('greetingPath: ', greetingPath);
    var path = greetingPath.split('/');
    console.log('path: ', path);

    if(req.method === 'GET') {
        
        if(path[1] === 'greeting') {
            var greeting = 'hello';
            var name = 'stranger';
            if (path[2]) {name = path[2];}
            if (query.salutation) {greeting = query.salutation;}
            if (query.format === 'cowsay') {
                res.end(cowsay.say({
                    text: `${greeting} ${name}`
                }));
            }   
            res.end(`${greeting} ${name}`); 
        } else if (path[1] === 'fact') {
            const fact = 'HTTP stands for Hypertext Transfer Protocol.';
            res.end(`${fact}`)

        } else {
            res.end('please start path with "/greeting" or "/fact" to get response')
        }  
    }

    if (req.method != 'GET') {
        res.statusCode = 404;
        res.end(`CANNOT ` + req.method + ' ' + parsedUrl.path);
    }

});

module.exports = server;