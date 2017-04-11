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

    it('GET / facts', done => {
        request
            .get('/facts')
            .end((err, res) => {
                assert.isOk(res.text, []);
                done();
            });
    });

    it('non-GET verb / error', done => {
        request
            .delete('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'CANNOT DELETE /');
                assert.equal(res.statusCode, 404);
                done();
            });
    });

    let sentFact = 'I like pandas.';

    it('POST /facts', done => {
        request
            .post('/facts')
            .send(sentFact)
            .end((err, res) => {
                assert.strictEqual(res.text, sentFact);
                assert.equal(res.statusCode, 201);
                done();
            });
    });

    it('GET /facts returns posted fact', done => {
        request
            .get('/facts')
            .end((err, res) => {
                let resFact = res.text.split(',').pop();
                assert.deepEqual(resFact, sentFact)
                done();
            });
    });

    it('POST /facts with no data', done => {
        request
            .post('/facts')
            .end((err, res) => {
                assert.equal(res.statusCode, 400);
                assert.strictEqual(res.text, `please send valid fact`);
                done();
            });
    });

    it('POST not /facts', done => {
        request
            .post('/')
            .end((err, res) => {
                assert.equal(res.statusCode, 404);
                assert.strictEqual(res.text, 'please start path with "/facts" to post');
                done();
            })
    });
});
