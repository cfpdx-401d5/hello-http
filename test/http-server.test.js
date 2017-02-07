const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

chai.use(chaiHttp);

const server = require('../lib/http-server');

describe('testing http servers with chai-http', () => {

    const request = chai.request(server);

    it('GET / says hello world!', done => {
        request
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello world!');
                done();
            })
    });

    it('POST / not accepting posts at this time', done => {
        request
            .post('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'not accepting posts at this time');
                done();
            })
    });

})