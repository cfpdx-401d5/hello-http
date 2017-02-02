const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const query = qs.parse(parsedUrl.query);
    console.log(query);
    
    var greetingPath = parsedUrl.path.split('?')[0];
    var path = greetingPath.split('/');
    
    var greeting = 'hello';
    var name = 'stranger';

    if(req.method === 'GET') {
        
        if(path[1] === 'greeting') {
            var greeting = 'hello';
            var name = 'stranger';
            if (path[2]) {
                name = path[2];
            }
            if  (query.salutation) {
                greeting = query.salutation;
            }
            res.end(`${greeting} ${name}`);
        } else if (path[1] === 'fact') {
            const factList = [
                'HTTP stands for Hypertext Transfer Protocol.',
                'HTTP uses verbs like GET, POST, PUT, DELETE, PATCH',
                'A 400 level error is a Client Error'
            ];

            const fact = factList[0];

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