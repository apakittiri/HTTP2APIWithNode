"use strict";
var fs = require('fs');
var port = process.env.port || 1337;
var options = {
    key: fs.readFileSync('./node_modules/http2/example/localhost.key'),
    cert: fs.readFileSync('./node_modules/http2/example/localhost.crt')
};
require('http2').createServer(options, function (request, response) {
    response.writeHead(200);
    response.end('Hello world!');
}).listen(port);
//# sourceMappingURL=server.js.map