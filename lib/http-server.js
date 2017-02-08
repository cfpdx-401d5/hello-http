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



    if (req.method === 'GET') {
        if(pathName === '/greeting') {
            res.end('Hello greeting!');
        }
        res.end('Hello!');
    }





// ---

    // if (req.method === 'POST') {
    //     res.end('not accepting posts at this time');

    // } else if(req.method === 'GET') {
    //     if(query.format === 'json') {
    //             res.setHeader('Content-Type', 'application/json');
    //             res.end(JSON.stringify({ message: 'hello world' }));
    //     } 
    //     else {
    //         res.end('hello world!');
    //     }
    // } else {
    //     res.statusCode = 404;
    //     res.end(`http method ${req.method} not supported`);
    // }


})

module.exports = server;
