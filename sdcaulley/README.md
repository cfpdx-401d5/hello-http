# Hello HTTP
This is a light weight http server that handles GET reqests for the Greeting App

## Usage
### Greet
The server is set to run on port 3000, so the url for the server is:
``` localhost:3000
```
The basic app is run by typing the following in your browser:
```
localhost:3000/greet
```
returns:
```
Hello, Stranger!
```
Arguments for the greeting app are passed in as query strings to the url.  The arguments are name and salutaion. By default all greetings are returned as pain text.
```
localhost:3000/greet?name=Steve&salutaion=Hola
```
returns:
```
Hola, Steve!
```
If you would like to see a cow say your greeting, add ```format=cowsay``` to the url.
```
localhost:3000/greet?name=Steve&salutaion=Hola
```
returns
```
 ______________
< Hola, Steve! >
 --------------
        \   ^__^
         \  (oO)\_______
            (__)\       )\/\
             U ||----w |
                ||     ||
```
### Fun Fact
There is also a fun fact about http available at ```localhost:3000/fact```.