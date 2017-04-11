const httpServer = require('./lib/http-server');
const PORT = 8080;
const HOST = 'localhost';

// to start the server, type 'node <this filename>' in the terminal
// ~/ node index.js

httpServer.listen(PORT, HOST, () => {
    console.log(`The server has started on ${HOST}:${PORT}`);
})

// use postman to investigate the different verbs for HOST PORT 
// the browser only will request GET