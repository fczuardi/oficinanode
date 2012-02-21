var http = require('http');
var colors = require('colors');

var requests = [];
var options = [];
options.push({
  host: 'garoa.net.br',
  port: 80,
  path: '/wiki/P%C3%A1gina_principal',
  color:'red'
});
options.push({
  host: 'fabricio.org',
  port: 80,
  path: '/',
  color:'green'
});
options.push({
  host: 'fabricio.org',
  port: 80,
  path: '/',
  color:'yellow'
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
