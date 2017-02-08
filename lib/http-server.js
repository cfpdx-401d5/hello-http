const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url);
    const pathName = parsedURL.pathname;
    const pathArray = pathName.split('/'); //why can't I chain .shift() here?
    const query = qs.parse(parsedURL.query);

    let path = pathArray[1];
    let name = pathArray[2] || 'stranger';
    let salutation = query.salutation || 'hello';

    if (req.method === 'GET') {
        if (path === 'greeting') {
            res.end(`${salutation} ${name}!`);
        } else if (path === 'fact') {
            res.end('HTTP stands for Hypertext Transfer Protocol');
        } 
    } else {
        // TODO: Need to add 404 status
        res.end(`CANNOT ${req.method} ${req.pathName}`)
    }
    
})

module.exports = server;