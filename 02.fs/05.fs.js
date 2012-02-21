var fs = require('fs');
var filePath = '../data/turma_do_funil.txt'
var options = { 
      flags: 'r',
      encoding: 'utf8',
      bufferSize: 1
    };

var read_stream = fs.createReadStream(filePath, options);
read_stream.on("data", function(data){
  console.log(data);
  // process.stdout.write(data);
});
read_stream.on("error", function(err){
  console.error("An error occurred: %s", err)
});
read_stream.on("close", function(data){
  console.log('====== EOF ========');
});
