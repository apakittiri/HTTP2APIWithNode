﻿import http2 = require('http');
import fs = require('fs');
var port = process.env.port || 1337;
var options = {
    key: fs.readFileSync('./node_modules/http2/example/localhost.key'),
    cert: fs.readFileSync('./node_modules/http2/example/localhost.crt')
};

require('http2').createServer(options, function (request, response) {
    response.end('Hello world!');
}).listen(8080);