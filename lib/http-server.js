const http = require('http');

// const server = new http.Server();
// server.on('request', (err, res) => {

// })

const server = http.createServer((err, res) => {
    res.end('hello world!');
})

module.exports = server;