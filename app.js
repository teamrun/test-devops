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
// test for git pull hook
// test 2. after change hook file's mod  // 777 works
// test 3. see what param passed   // only one, a squash merge or not

