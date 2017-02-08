# HELLO-HTTP
A http server that will act as a simple greeting and facts app.

## Getting Started
1. Install [Node.js] (https://nodejs.org/en/)
2. Run `git clone https://github.com/bhuneke/hello-http`
3. Run `git checkout lab2`
4. Run `npm install`

Run `node server.js` to start server. Default port number is `3000`. So, the base url should be `http://localhost:3000/`.

## API for Greeting

### Default greeting

Browser responds with default greeting: `hello stranger`

```
GET /greeting
```

### Personalized greeting

Browser responds with personalized greeting: `hello <name>`

```
GET /greeting/<name>
```

### Personalized greeting and salutation

Browser responds with personalized greeting and salutation: `<salutation> <name>`

```
GET /greeting/<name>?salutation=<salutation>
```

### Personalized greeting and salutation

Browser responds with greeting said by a cow (personalized greeting and salution are optional):
 _______________
< hello stranger >
 ---------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
GET /greeting?format=cowsay
```

## API for Facts

### Get Facts

Browser responds with list of HTTP facts:

```
GET /facts
```

### Post Facts

Data that is input will be added to the list of facts:

```
POST /facts
```
