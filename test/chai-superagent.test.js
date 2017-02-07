const chai = require('chai');
const assert = chai.assert;
const request = require('superagent');

describe('chai assertion library', () => {

    it('has cool convenience methods - pass', () => {
        assert.isAbove(5, 2);
    });

})

describe('superagent', () => {

    it('gets google', done => {
        request
            .get('http://google.com')
            .end((err, res) => {
                assert.isOk(res.text);
                console.log(res.text);
                done();
            })
    });

})