// get our dependencies
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
// register the plugin with chai using .use
chai.use(chaiHttp);

const server = require('../lib/http-server');
// if I build a class instead...?


describe('testing http server with chai-http', () => {

    const request = chai.request(server);

    it('GET / says "hello stranger" ', done => {
        request
            .get('/greeting')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello stranger');
                done();
            });
    });

    it('GET / says "hello <name>" ', done => {
        request
            .get('/greeting/lynn')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello lynn');
                done();
            });
    });

    it('GET / says "<salutation> <name>', done => {
        request
            .get('/greeting/lynn?salutation=bonjour')
            .end((err, res) => {
                assert.strictEqual(res.text, 'bonjour lynn');
                done();
            })
    });

    it('GET / fact', done => {
        request
            .get('/fact')
            .end((err, res) => {
                assert.strictEqual(res.text, 'Development of HTTP was initiated by Tim Berners-Lee at CERN in 1989');
                done();
            });
    });

    it('POST / says "Cannot POST ', done => {
        request
            .post('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'Cannot POST ');
                assert.strictEqual(res.statusCode, 404);
                done();
            });
    });

}); // describe