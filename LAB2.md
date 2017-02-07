<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> POST to Hello HTTP
======

## Directions

Change the "interesting fact" route to return a list of all the interesting facts (maybe rename to `/facts` instead of `/fact`

Add a post method for the `/facts` route that adds the posted body (if it exists) to the in-memory fact array. The post should return the same info that was posted.

## Testing

* Add tests for posting fact. Both the actual POST operation, and subsequent GET includes that fact.

## Bonus

Store your interesting facts in mongodb! (Don't worry about tests because you don't know how to drop db yet)

## Rubric

* HTTP Path and Verb: 2pts
* Read and deserialize body: 4pts
* Correctly manage facts: 2pts
* Tests: 2pts

==========================================================

The salutation and cowsay should be recognize as a query string. Not as a URI segment. For example...

http://localhost:3000/greeting?salutation=hola

http://localhost:3000/greeting?salutation=hola&format=cowsay

http://localhost:3000/greeting/tom?salutation=hola

http://localhost:3000/greeting/tom?salutation=hola&format=cowsay

On line 9 of your http-server.js file, you have access to the query params from that variable/object. Use that to add in your logic.

All other GET request paths other than /greeting, /greeting/<name>, and /fact should be a 404 page.

=========================================================

The querystring.parse() method parses a URL query string (str) into a collection of key and value pairs.

For example, the query string 'foo=bar&abc=xyz&abc=123' is parsed into:

{
  foo: 'bar',
  abc: ['xyz', '123']
}
==========================================================
url.pathname#
Gets and sets the path portion of the URL.

const myURL = new URL('https://example.org/abc/xyz?123');
console.log(myURL.pathname);
  // Prints /abc/xyz

myURL.pathname = '/abcdef';
console.log(myURL.href);
  // Prints https://example.org/abcdef?123