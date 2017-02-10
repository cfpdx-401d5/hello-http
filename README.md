# HELLO-HTTP
This is a simple greeting app that responds with a browser greeting when the user inputs information in the url.

##To Use
- the user will need to start the server and navigate to the port on the browser
    > localhost:3000
- default greeting:
    > localhost:3000/greeting
    -- responds "hello stranger"
- personalized greeting (optional):
    > localhost:3000/greeting/brigitte
    -- responds "hello brigitte"
- personalized saluation (optional):
    > localhost:3000/greeting/brigitte?salutation=hola
    -- responds "hola brigitte"
- greeting by cow (optional):
    > localhost:3000/greeting/brigitte?salutation=hola&format=cowsay
     -- responds:
 _______________
< hola brigitte >
 ---------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
- also try:
    > localhost:3000/fact

 