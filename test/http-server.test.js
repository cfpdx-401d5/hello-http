const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

chai.use(chaiHttp);

const server = require('../lib/http-server');

describe('test greetings - http server', () => {
    const request = chai.request(server);

    it('GET / greeting stranger', done => {
        request
            .get('/greeting')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello stranger!');
                done();
            });
    });

    it('GET / greeting name', done => {
        request
            .get('/greeting/mel')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello mel!');
                done();
            });
    });

    it('GET / salutation stranger', done => {
        request
            .get('/greeting/?salutation=howdy')
            .end((err, res) => {
                assert.strictEqual(res.text, 'howdy stranger!');
                done();
            });
    });

    it('GET / salutation name', done => {
        request
            .get('/greeting/jana?salutation=bonjour')
            .end((err, res) => {
                assert.strictEqual(res.text, 'bonjour jana!');
                done();
            });
    });

})

describe('test fact - http server', () => {
    const request = chai.request(server);

    it('GET / fact', done => {
        request
            .get('/fact')
            .end((err, res) => {
                assert.strictEqual(res.text, 'HTTP stands for Hypertext Transfer Protocol');
                done();
            })
    })

})

describe('all other requests', () => {
    const request = chai.request(server);

    it('GET / index', done => {
        request
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.status, 404);
                assert.strictEqual(res.text, `CANNOT ${req.method} ${req.pathName}`);
                done();
            })
    });

    it('GET / facts', done => {
        request
            .get('/facts')
            .end((err, res) => {
                assert.strictEqual(res.status, 404);
                assert.strictEqual(res.text, `CANNOT ${req.method} ${req.pathName}`);
                done();
            })
    });

})