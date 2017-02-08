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

    it('GET / no greeting or salutation', done => {
        request
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'Who are you?');
                done();
            });
    });

})

describe('test facts - http server', () => {

    it('GET / fact', done => {
        request
            .get('/fact')
            .end((err, res) => {
                assert.strictEqual(res.text, 'HTTP stands for Hypertext Transfer Protocol');
                done();
            })
    })

})