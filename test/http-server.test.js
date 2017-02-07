const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../lib/http-server');

describe('testing the http server that I made', () => {
    const request = chai.request(server);

    var factual2 = '\n  "this is a fact about http"\n]';

    it('checks the POST method', done => {
        request
            .post('/facts')
            .send('this is a fact about http')
            .end((err, response) => {
                assert.strictEqual(response.text, 'this is a fact about http');
                assert.equal(response.statusCode, 200);
                done();
        });            
    });
    it('checks that the POST method is added with the GET method', done => {
        request
            .get('/facts')
            .end((err, response) => {
                let responseDisplay = response.text.split(',').pop();
                assert.equal(responseDisplay, factual2)
                assert.equal(response.statusCode, 200);
                done();
        });
    });
    it('gives a salutation with a name', done => {
        request
            .get('/greeting/claire?salutation=hello')
            .end((err, response) => {
                assert.strictEqual(response.text, 'hello claire')
                done();
        });
    });
    it('gives a salutation with no name', done => {
        request
            .get('/greeting?salutation=hey')
            .end((err, response) => {
                assert.strictEqual(response.text, 'hey stranger')
                done();
        })
    })
    it('says greeting with name', done => {
        request
            .get('/greeting/claire')
            .end((err, response) => {
                assert.strictEqual(response.text, 'hello claire')
                done();
        });
    });
    it('says greeting without name', done => {
        request
            .get('/greeting')
            .end((err, response) => {
                assert.strictEqual(response.text, 'hello stranger')
                done();
        });
    });
});