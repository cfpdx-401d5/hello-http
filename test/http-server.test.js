const server = require('../lib/http-server');
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('testing servers with chai-http', () => {
    const request = chai.request(server);

    it('GET / says I guess', done => {
        request
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'get');
                done();
            });
    });
});
