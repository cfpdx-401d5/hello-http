const http = require('http');

// const server = new http.Server();
// server.on('request', (err, res) => {

// })

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        res.end('not accepting posts at this time');
    } else {
        res.end('hello world!');
    };
})

module.exports = server;