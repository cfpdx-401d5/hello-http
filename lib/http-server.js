const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url);
    // console.log('parsedURL: ', parsedURL);
    const pathName = parsedURL.pathname;
    // console.log('pathname:',pathName);
    const pathArray = pathName.split('/'); //why can't I chain .shift() here?
    // console.log('pathArray:', pathArray);
    let greeting = pathArray[1];
    let name = pathArray[2];

    const query = qs.parse(parsedURL.query);
    console.log('query:', query);
    console.log('query.salutation:', query.salutation);

    if (req.method === 'GET' && greeting === 'greeting') {
        let salutation = query.salutation;
        if(!query.salutation) {
            if(!name) {
                res.end('hello stranger.');
            } else
                res.end(`hello ${name}!`);
        } else {
            if(!name) {
                res.end(`${salutation} stranger.`);
            } else
                res.end(`${salutation} ${name}`);
        }
    } else {
        res.end('Who are you?');
    }

})

module.exports = server;