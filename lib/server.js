// get the server started
const server = require('../lib/http-server');
const PORT = 3000;

server.listen(PORT, () => {
    console.log('Server is listening on: ', PORT);
});