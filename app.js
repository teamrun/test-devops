var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n ' + restartTime);
});

var port = 3030;

if( process.argv[2] ){
  port = process.argv[2];
}

server.listen(port);

console.log('server listen ing at: ', port);
console.log(__filename);