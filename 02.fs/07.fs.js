var fs = require('fs');
var monitoredFile = '/Users/fabricio/screenlog.0'
fs.open(monitoredFile, 'r', function(err,fd){
  if(err) {
    console.error("File could not be opened: %s", err);
    process.exit(1);
  }
  fs.watchFile(monitoredFile, function (curr, prev) {
    fs.read(fd, new Buffer(100000), 0 || prev.size, curr.size, null, function(err, bytesRead, buffer){
      if(err) {
        console.error("Data could not be read: %s", err);
      }
      process.stdout.write(buffer.toString('utf8',prev.size,curr.size));
    })
  });  
});
 
