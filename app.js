var http = require('http');

var start = new Date();

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! Depoly works~ server (re)started at:  '+[start.getHours(), start.getMinutes(), start.getSeconds()].join(':') );
});

var port = 3030;

server.listen(port);

console.log('server listen ing at: ', port);
console.log(__filename);
// tt tt tt tt tt tt
