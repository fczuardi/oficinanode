var fs = require('fs');
var monitoredFile = '05.fs.js'
fs.watchFile(monitoredFile, function (curr, prev) {
  console.log(curr);
  console.log(prev);
});
