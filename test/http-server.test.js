const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

chai.use(chaiHttp);

describe('chai-http', () => {

    const request = chai.request('http://google.com');

    it('gets google', done => {
        request
            .get('/')
            .end((err, res) => {
                assert.isOk(res.text);
                console.log(res.text);
                done();
            })
    });

    it('gets google maps', done => {
        request
            .get('/maps')
            .end((err, res) => {
                assert.isOk(res.text);
                console.log(res.text);
                done();
            })
    });

})