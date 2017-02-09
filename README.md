#Hello HTTP
## A simple Node.js HTTP server. 
###This server will respond with a greeting if the method is GET and if path is /greeting/<name>.
  * If query string specifies `salutation` that will be used for the greeting salutation
  * If name is not included, "stranger" will be used for name in greeting
* Response is an interesting (to me) fact about HTTP if the method is GET and the url (path) is `/fact`
* Any other request returns status code 404 Not Found and includes the text: `CANNOT <verb> <path>`
* Add a `README.md` that describes how to use your API 
##How to use this API
  * start the server (server.js)
  * open browser to port 
    >localhost:3000
  * default greeting
    >localhost:3000/greeting 
    responds 'hello stranger'
  * personalized greeting
    >localhost:3000/greeting/<name>
    responds 'hello <name>'
  * personalized salutation
    >localhost:3000/<name>?salutation=<salutation>
    responds '<salutation> <name>  -- such as 'bonjour earnest'
  * greeting by cowsay
    >localhost:3000/greeting/<name>?salutation=<salutation>&format=cowsay
    responds 
    '< hello name >
     ------------
          \   ^__^
           \  (oo)\_______
              (__)\       )\/\
                  ||----w |
                  ||     ||
  * fact
    >localhost:3000/fact
    responds with an interesting HTTP fact
    >localhost:3000/fact?format=cowsay
    responds with the fact in cowsay format
    