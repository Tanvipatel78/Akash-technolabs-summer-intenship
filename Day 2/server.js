var http = require("http");

http.createServer(function(request , response){
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('Hello world in node js\n');
}).listen(3000);

console.log('server is started on port No 3000');