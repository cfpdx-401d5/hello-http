const chai = require('chai');
const request = require('superagent');
const chaiHttp = require('chai-http'); // plugin
const assert = chai.assert;

// register the chaiHttp plugin
chai.use(chaiHttp);

const server = require('../lib/http-server');

describe('test the http server', () => {

    const request = chai.request(server);

    it('GET / returns the response text', done => {
        request 
        .get('/')
        .end((err, res) => {
            assert.strictEqual(res.text, 'the query.format is not json');
            done();
        });
    });

    it('GET / with json format returns content body', done => {
        request
        .get('/')
        .query({format: 'json'})
        .end((err, res) => {
            assert.isOk(res.body);
            assert.deepEqual(res.body, {message: 'reached res.end'});
            done();
        })
    })

});