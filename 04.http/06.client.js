var http = require('http');
var colors = require('colors');

var requests = [];
var options = [];
options.push({
  host: '127.0.0.1',
  port: 1337,
  path: '/',
  color:'red'
});
options.push({
  host: '127.0.0.1',
  port: 1337,
  path: '/',
  color:'green'
});

options.forEach(function(item){
  var req = http.get(item, function(res) {
    console.log("Got response: " + res.statusCode);
    res.setEncoding('utf8');
    res.on('data', function(chunk){
      console.log(chunk[item.color]);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
})
