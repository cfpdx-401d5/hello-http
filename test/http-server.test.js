const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const server = require('../httpCowSayFiglet');
 
describe('test my httpCowSayFiglet server', () => {

  const request = chai.request(server);

  it('test "happy_cow" url', done => {
    request
      .get('/happy_cow')
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.text, 'hello wonderful world!');
        done();
      });
  });

  it('test "angry_cow" url', done => {
    request
      .get('/angry_cow')
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.text, 'eat cow pies and die!!!');
        done();
      });
  });

  it('test "halloween" url', done => {
    request
      .get('/halloween')
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.text, 'happy halloween!');
        done();
      });
  });

  it('test "spider" url', done => {
    request
      .get('/spider')
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.text, '"Spiders from Angry Red Planet Mars"');
        done();
      });
  });

  it('test "/" url', done => {
    request
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.text, '404 - Not Found ==> try URLs ... /halloween or /happy_cow or /angry_cow');
        done();
      });
  });

});
