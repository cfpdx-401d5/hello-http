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
        if (path[2]) {
            name = path[2];
        }
        if  (query.salutation) {
            greeting = query.salutation;
        }
        res.end(`${greeting} ${name}`);
        
    }
});

module.exports = server;