const chai = require('chai');
const request = require('superagent');
const chaiHttp = require('chai-http'); // plugin
const assert = chai.assert;
const expect = chai.expect;

// register the chaiHttp plugin
chai.use(chaiHttp);

const server = require('../lib/http-server');

describe('test the http server', () => {

    const request = chai.request(server);

    it('responds with a 200 status code for a successful request', done => {
        request
        .get('/')
        .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('responds with a 404 status code for an unsuccessful request', done => {
        request
        .post('/')
        .end((err, res) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });

    it('GET/ responds with instruction to add "greeting" or "fact" in the path', done => {
        request
        .get('/')
        .end((err, res) => {
            expect(res.text).to.be.at.least('Try adding "greeting');
            done();
        });
    });

    it('GET/fact responds with a fact', done => {
        request
        .get('/fact')
        .end((err, res) => {
            expect(res.text).to.be.at.least('from Wikipedia:\nThe first version');
            done();
        });
    });

    it('GET/greeting responds with "Hello stranger!"', done => {
        request
        .get('/greeting')
        .end((err, res) => {
            assert.equal(res.text, 'Hello stranger!');
            done();
        })
    });

    it('GET/greeting/<name> responds with "Hello <name>!"', done => {
        request
        .get('/greeting/kevin')
        .end((err, res) => {
            assert.equal(res.text, 'Hello Kevin!');
            done();
        });
    });

    it('GET with a <= 3 part path responds appropriately', done => {
        request
        .get('/1/2/3')
        .end((err, res) => {
            expect(res.text).to.be.at.least('You have gone down a path');
            done();
        });
    });

    it('GET responds with the given salutation in the query string for a stranger', done => {
        request
        .get('/greeting?pass=no_fail&salutation=howdy')
        .end((err, res) => {
            assert.equal(res.text, 'howdy stranger!');
            done();
        });
    });

    it('GET responds with the given salutation in the query string for <name>', done => {
        request
        .get('/greeting/kevin')
        .query({salutation: 'hola'})
        .end((err, res) => {
            assert.equal(res.text, 'hola Kevin!');
            done();
        });
    });

});