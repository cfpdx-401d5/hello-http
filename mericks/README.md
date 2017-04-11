### HTTP-SERVER ###

This app demonstrates an http server build using the chai framework together with superagent for testing.

Functionality is demosntrated via a simple greeting app on localhost:3000:
 
 * A GET request with path '/greeting' responds with 'hello stranger!', unless a name is provided in the path (e.g., '/greeting/tom'), in which case the response is 'hello tom'.

 * Additional customization is possible with the inclusion of a specified salutation in the query string.
    '/greeting/tom?salutation=hola' will respond with 'hola tom!'

* All other requests will respond with a 404 status code and explanation that the app cannot respond to the requested method and path.


