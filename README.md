# Hello HTTP

This app is an HTTP server that uses 'GET' requests as a Greeting app.

The URL for this HTTP server is localhost:3000

## Instructions for using this app:

The app is run by entering specific URL patterns into the browser.

URL 'localhost:3000/greeting' will return 'hello stranger'.

URL 'localhost:3000/greeting/<name>', where, for example, <name> is 'Zen', will return 'hello Zen'.

URL 'localhost:3000/salutation/<name>/<altGreeting>', where, for example, <name> is 'Zen' and <altGreeting> is 'hola', will return 'hola Zen' ... or 'hola stranger' if no <name> is provided.

URL 'localhost:3000/salutation/<name>/<altGreeting>/cowsay', where, for example <name> is 'zen' and <altGreeting> is 'willkommen', will return a stylized message 'moo moo willkommen zen', as depicted below.
```
 ____________________________
< moo moo willkommen zen !!! >
 ----------------------------
        \   ^__^
         \  (@@)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
```
URL 'localhost:3000/' will return '404 - Not Found ... try adding "/greeting" to this url'.

URL 'localhost:3000/fact' will return an interesting fact about http.

Using an HTTP request method other than 'GET' will return '404 - http method <req.method> is not supported'. For example, is HTTP request method is 'POST', the app will return '404 - http method POST is not supported'.