var http = require('http');
var hw = ['hello', 'world'];

http.createServer(function (req, res) {
  res.counter = 0;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  setInterval(function(){
    res.write(hw[res.counter%2]+"\n");
    res.counter++;
  }, 1000)
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');