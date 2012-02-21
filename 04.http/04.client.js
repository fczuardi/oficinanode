var http = require('http');

var options = {
  host: 'fabricio.org',
  port: 80,
  path: '/'
};

http.get(options, function(res) {
  console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    console.log(chunk);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});