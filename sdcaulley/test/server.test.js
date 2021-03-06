const chai = require('chai');
const assert = chai.assert;
const http = require('chai-http');
const cowsay = require('cowsay');
const server = require('../lib/http-server');

chai.use(http);

describe('basic server function', () => {
    const request = chai.request(server);

    it('GET / say "helllo world"', done => {
        request
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'Hello world!');
                done();
            });
    });

    it('POST says 404 not supported', done => {
        request
            .post('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'CANNOT POST at /');
                done();
            });
    });

    it('GET /greet returns greeting using flags', done => {
        request
            .get('/greet')
            .end((err, res) => {
                assert.strictEqual(res.text, "Hello, Stranger!");
                done();
            });
    });

    it('GET /greet with name argument plain', done => {
        request
            .get('/greet')
            .query('name=Marty')
            .end((err, res) => {
                assert.strictEqual(res.text, "Hello, Marty!");
                done();
            });
    });

    it('GET /greet with name argument and greeting', done => {
        request
            .get('/greet')
            .query('name=Marty')
            .query('salutaion=Hola')
            .end((err, res) => {
                assert.strictEqual(res.text, "Hola, Marty!");
                done();
            });
    });

    it('GET /greet with name, greeting and cow', done => {
        request
            .get('/greet')
            .query('name=Marty')
            .query('salutaion=Hola')
            .query('format=cowsay')
            .end((err, res) => {
                assert.strictEqual(res.text, cowsay.say({
                    text: `Hola, Marty!`,
                    e: 'oO',
                    T: 'U'
                }));
                done();
            });
    });

    it('GET /fact returns http fact', done => {
        request
            .get('/fact')
            .end((err, res) => {
                assert.strictEqual(res.text, "Development of HTTP was initiated by Tim Berners-Lee at CERN in 1989.");
                done();
            });
    });

    it('POST /fact returns array with new fact added', done => {
        request
            .post('/facts')
            .send({ message: "The h stands for hyper." })
            .end((err, res) => {
                assert.strictEqual(res.text, '"The h stands for hyper."');
                done();
            })
    });

    it('return an array containing a new fact', done => {
        request
            .get('/facts')
            .end((err, res) => {
                if (err) console.log('fail: ', err);
                assert.notInclude(res.text, "The term hypertext was coined by Ted Nelson in 1965 in the Xanadu Project.");
            });

        request
            .post('/facts')
            .send({ message: 'The term hypertext was coined by Ted Nelson in 1965 in the Xanadu Project.' })
            .end((err, res) => {
                assert.strictEqual(res.text, '"The term hypertext was coined by Ted Nelson in 1965 in the Xanadu Project."');
            });

        request
            .get('/facts')
            .end((err, res) => {
                assert.include(res.text, '"The term hypertext was coined by Ted Nelson in 1965 in the Xanadu Project."');
                done();
            })
    });

});