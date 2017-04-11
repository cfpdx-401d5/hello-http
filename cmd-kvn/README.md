# Hello HTTP v1.0.0

This project creates a simple http server that handles `GET` requests.

## Setup
1. Clone this repository
2. Run setup in the terminal
```
$ npm install
$ npm run test
```
## Usage
In the terminal run:
```
$ node index.js
```

### For `GET` requests
- In the browser add to the path:
    * `/greeting`
    * `/greeting/<name>`
    * A query string: `?salutation=<alternative greeting>` 
### For `POST/PUT/PATCH/DELETE/ETC` requests
- Use an app like Postman to send these requests
