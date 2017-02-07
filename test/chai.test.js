const chai = require('chai');
const assert = chai.assert;

describe('chai assertion library', () => {

    it('has cool convenience methods - fail', () => {
        assert.isAbove(2, 5);
    });

    it('has cool convenience methods - pass', () => {
        assert.isAbove(5, 2);
    });
    

})