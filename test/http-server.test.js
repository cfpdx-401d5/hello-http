const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const url = require('url');
const server = require('../lib/http-server');
const cowsay = require('cowsay');
 
describe('test the http server :', () => {

	const request = chai.request(server);

	it.skip('tests cowsay salutation', done => {
		request
			.get('/salutation/Zen/willkommen/cowsay')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, cowsay.say( {
					text: 'moo moo willkommen Zen !!!',
					e: '@@',
					T: 'U '
				}));
				done();
			});
	});

	it('tests "/greeting" url', done => {  // this test works !!!
		request
			.get('/greeting')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'hello stranger');
			});
		done();
	});

	it('tests "/greeting/<name>" url', done => {  // this test works !!!
		request
			.get('/greeting/Zen')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'hello Zen');
			});
		done();
	});

	it('tests "/greeting?salutation=willkommen" url', done => {  // this test works !!!
		request
			.get('/greeting?salutation=willkommen')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'willkommen stranger');
			});
		done();
	});	

	it('tests "/greeting/<name>?salutation=<altGreeting>" url', done => {  // this test works !!!
		request
			.get('/greeting/Zen?salutation=willkommen')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'willkommen Zen');	
			});
		done();	
	});

	it('tests "/facts" url', done => {
		request
			.get('/facts')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res, 'HTTP is short for hyper-text transfer protocol', 'dogs have fleas');
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
