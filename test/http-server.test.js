const server = require('../lib/http-server');
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('testing servers with chai-http', () => {
    const request = chai.request(server);

    it('GET / hello stranger', done => {
        request
            .get('/greeting')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello stranger');
                done();
            });
    });

    it('GET / hello <name>', done => {
        request
            .get('/greeting/brigitte')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello brigitte');
                done();
            });
    });

    it('GET / salutation <name>', done => {
        request
            .get('/greeting/brigitte?salutation=hola')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hola brigitte');
                done();
            });
    });

    it('GET / fact', done => {
        request
            .get('/fact')
            .end((err, res) => {
                assert.strictEqual(res.text, 'HTTP stands for Hypertext Transfer Protocol.');
                done();
            });
    });

    it('non-GET verb / error', done => {
        request
            .post('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'CANNOT POST /');
                assert.equal(res.statusCode, 404);
                done();
            });
    });
});
