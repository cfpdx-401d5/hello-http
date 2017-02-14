const chai = require('chai');
const assert = chai.assert;
// plugin
const chaiHttp = require('chai-http');
// "register" the plugin with chai using .use
chai.use(chaiHttp);

// http server under test (SUT = system under test)
const server = require('../lib/http-server');

describe('testing http servers with chai-http', () => {

    const request = chai.request(server);

    it('GET / says "hello world"', done => {
        request
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello world!');
                done();
            });
    });

    it('POST / says not accepting', done => {
        request
            .post('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'not accepting posts at this time');
                done();
            });
    });

    it('PUT is 404 error', done => {
        request
            .put('/')
            .end((err, res) => {
                assert.equal(err.response.statusCode, 404);
                done();
            });
    });

    it('GET with format json returns content body', done => {
        request
            .get('/')
            .query({ format: 'json' })
            .end((err, res) => {
                assert.isOk(res.body);
                assert.deepEqual(res.body, { message: 'hello world' });
            });
    });

});

//// the server
const http = require('http');
const url = require('url');
const qs = require('querystring');

// const server = new http.Server();
// server.on('request', (req, res) => {
// });

// this is short-hand method for above 3 lines
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const query = qs.parse(parsedUrl.query);
    console.log(query);

    if (req.method === 'POST') {
        res.end('not accepting posts at this time');
    } else if (req.method === 'GET') {
        if (query.format === 'json') {
            res.setHeader('Content-Type', 'application/json');
            // res.setHeader('Content-Type', 'text/html');
            res.end(JSON.stringify({ message: 'hello world' }));
        } else {
            res.end('hello world!');
        }
    } else {
        res.statusCode = 404;
        res.end(`http method ${req.method} is not supported`);
    }
});

module.exports = server;