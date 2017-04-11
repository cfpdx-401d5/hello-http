const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url);
    const pathName = parsedURL.pathname;
    const pathArray = pathName.split('/'); 
    const query = qs.parse(parsedURL.query);

    let path = pathArray[1];
    let name = pathArray[2] || 'stranger';
    let salutation = query.salutation || 'hello';

    function badRequest() {
        res.statusCode = 404;
        res.end(`CANNOT ${req.method} ${req.url}`)
    };

    if (req.method === 'GET') {
        if (path === 'greeting') {
            res.end(`${salutation} ${name}!`);
        } else if (path === 'fact') {
            res.end('HTTP stands for Hypertext Transfer Protocol');
        } else {
            badRequest();
        }
    } else {
        badRequest();
    }
    
})

module.exports = server;