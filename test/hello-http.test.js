// get our dependencies
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
// register the plugin with chai using .use
chai.use(chaiHttp);
const superagent = require('superagent');
const server = require('../lib/http-server');
// if I build a class instead...?

describe('testing http server with chai-http', () => {
    const request = chai.request(server);

    it('GET / says "hello world" ', done => {
        request
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello world!');
                done(); //why done with end?
            });
    });

});