const http = require('http');
const qs = require('querystring');
const url = require('url');
const fs = require('fs');
const factArray = ['a more secure version of http is called https', 'http is the protocol to exchange or transfer hypertext', 'http functions as a request-response protocol in the client-server computing model'];

const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url);
    const query = qs.parse(parsedUrl.query);
    const path = parsedUrl.pathname;
    const greetingPath = path.split('/');
    
    //console.log(request.method);
    //console.log(request.url);
    //console.log(qs.parse(request.query));
    //console.log(url.parse(request.url));
    //console.log(qs.parse(parsedUrl.query));
if(request.method === 'POST') {
    if(greetingPath[1] === 'facts') {
        var data = '';

        request.setEncoding('utf8');

        request.on('data', function(chunk) {
            data += chunk;
        });
        request.on('end',function(){
            factArray.push(data);
            response.end(`${data}`);
        });
    }
}
    // if(request.method === 'POST') {
    //     if(greetingPath[1] === 'fact') {
    //         var write = JSON.stringify(factArray.push('random fact'));
    //         response.write(write.toString());
    //         response.end();
    //     }
    // }

    if (request.method === 'GET') {

        if(greetingPath[1] === 'facts') {
             response.write(JSON.stringify(factArray, '', 2));
             response.end();
         } 
         else if (greetingPath[1] === 'greeting') {
             if(query.salutation) {
                 if(greetingPath[2]) {
                     var salute = greetingPath[2].split('?');
                     response.write(query.salutation + ' ' + salute[0]);
                     response.end();
                 }
                 if (!greetingPath[2]) {
                    response.write(query.salutation + ' stranger');
                    response.end();
                 }
             }
             else {
                if(greetingPath[2]) {
                    response.write('hello ' + greetingPath[2]);
                    response.end();
                }
                if (!greetingPath[2]) {
                    response.write('hello stranger');
                    response.end();
                }
            }
        }
        else {
            response.statusCode = 404;
            response.write(`cannot ${request.method} ${parsedUrl.pathname}`);
            response.end();
        }
    }
});    

module.exports = server;