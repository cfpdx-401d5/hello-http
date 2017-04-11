// get our dependencies
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
// register the plugin with chai using .use
chai.use(chaiHttp);

const server = require('../lib/http-server');
const factArray = ['Development of HTTP was initiated by Tim Berners-Lee at CERN in 1989',
    'H stands for Hyper', 'T stands for Text and Transfer', 'P stands for Protocol'
];
// if I build a class instead...?


describe('testing http request/response with chai-http', () => {

    const request = chai.request(server);

    it('GET / says "hello stranger" ', done => {
        request
            .get('/greeting')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello stranger');
                done();
            });
    });

    it('GET / says "hello <name>" ', done => {
        request
            .get('/greeting/lynn')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello lynn');
                done();
            });
    });

    it('GET / says "<salutation> <name>', done => {
        request
            .get('/greeting/lynn?salutation=bonjour')
            .end((err, res) => {
                assert.strictEqual(res.text, 'bonjour lynn');
                done();
            })
    });

    it('GET / fact', done => {
        request
            .get('/fact')
            .end((err, res) => {
                assert.strictEqual(res.text, 'Development of HTTP was initiated by Tim Berners-Lee at CERN in 1989');
                done();
            });
    });

    it('GET / facts for whole arrary', done => {
        request
            .get('/facts')
            .end((err, res) => {
                res.text = JSON.parse(res.text);
                assert.deepEqual(res.text, factArray);
                done();
            })
    })

    it('POST / posts new facts', done => {
        request
            .post('/facts')
            .send({ message: 'You received 200 POST' })
            .end((err, res) => {
                assert.strictEqual(res.text, '"You received 200 POST"');
                done();
            });
    });

}); // describe