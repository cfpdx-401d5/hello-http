const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url);
    const pathName = parsedURL.pathname;
    const pathArray = pathName.split('/'); //why can't I chain .shift() here?
    const query = qs.parse(parsedURL.query);

    let greeting = pathArray[1];
    let name = pathArray[2] || 'stranger';
    let salutation = query.salutation || 'hello';

    if (req.method === 'GET' && greeting === 'greeting') {
        res.end(`${salutation} ${name}`);
    } else {
        res.end('Who are you?');
    };

})

module.exports = server;