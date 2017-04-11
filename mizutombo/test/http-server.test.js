const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const url = require('url');
const server = require('../lib/http-server');
const cowsay = require('cowsay');
 
describe('test the http server :', () => {

	const request = chai.request(server);

	// it('tests cowsay salutation', done => {
	// 	request
	// 		.get('/greeting/Zen?salutation=willkommen&format=cowsay')
	// 		.end((err, res) => {
	// 			if (err) return done(err);
	// 			assert.strictEqual(res, cowsay.say( {
	// 				text: 'moo moo willkommen Zen !!!',
	// 				e: '@@',
	// 				T: 'U '
	// 			}));
	// 			done();
	// 		});
	// });

	it('tests "/greeting" url', done => {  // this test works !!!
		request
			.get('/greeting')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'hello stranger');
				done();
			});
	});

	it('tests "/greeting/<name>" url', done => {  // this test works !!!
		request
			.get('/greeting/Zen')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'hello Zen');
				done();
			});
	});

	it('tests "/greeting?salutation=willkommen" url', done => {  // this test works !!!
		request
			.get('/greeting?salutation=willkommen')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'willkommen stranger');
				done();
			});
	});	

	it('tests "/greeting/<name>?salutation=<altGreeting>" url', done => {  // this test works !!!
		request
			.get('/greeting/Zen?salutation=willkommen')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, 'willkommen Zen');	
				done();
			});	
	});

	it('tests "/facts" url', done => {
		request
			.get('/facts')
			.end((err, res) => {
				if (err) return done(err);
				assert.strictEqual(res.text, '["http is short for hyper-text transfer protocol","https is secure http"]');
				done();
			});
	});

	it('tests "/" url', done => {
		request
			.get('/')
			.end((err, res) => { 
				assert.equal(err.response.statusCode, 404);		
				done();
			});
	});

	it('tests url method other than "/GET" url', done => {
		request
			.put('/greeting/Zen?salutation=willkommen')
			.end((err, res) => {
				assert.equal(err.response.statusCode, 404);				
				done();
			});
			
	});

});