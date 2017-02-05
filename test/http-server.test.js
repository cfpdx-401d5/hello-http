const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const server = require('../lib/http-server');
 
describe('test the http server :', () => {

	const request = chai.request(server);

	it('test "happy_cow" url', done => {
		request
      .get('/salutation/Zen/willkommen/cowsay')
      .end((err, res) => {
	if (err) return done(err);
	assert.strictEqual(res.text, 'moo moo willkommen zen !!!');
	done();
});
	});

	it('tests "/greeting" url', done => {
		request
			.get('/greeting')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'hello stranger');
				done();
			});
	});

	it('tests "/greeting/<name>" url', done => {
		request
			.get('/greeting/Zen')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'hello Zen');
				done();
			});
	});

	it('tests "/salutation//<altGreeting>" url', done => {
		request
			.get('/salutation//willkommen')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'willkommen stranger');
				done();
			});
	});	

	it('tests "/salutation/<name>/<altGreeting>" url', done => {
		request
			.get('/salutation/Zen/willkommen')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'willkommen Zen');
				done();
			});
	});

	it('tests "/fact" url', done => {
		request
			.get('/fact')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'HTTP is short for hyper-text transfer protocol');
				done();
			});
	});

	it('tests "/" url', done => {
		request
			.get('/')
			.end((err, res) => { 
				if (err) return done(err);		
				assert.deepEqual(res.text, '404 - Not Found ... try adding "/greeting" to this url');
				done();
			});
	});

	it('tests url method other than "/GET" url', done => {
		request
			.post('/salutation/Zen/hola')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, '404 - http method POST is not supported');
				done();
			});
	});

});
