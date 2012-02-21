var fs = require('fs');
var root_folder = '../../..';
var errors = 0;

function printDir(path){
  fs.readdir(path, function(err, files){
    if (err) {
      console.log('Erro:',err)
      errors++;
      return
    }
    files.forEach(function(item){
      fs.stat(path+'/'+item, function(err, stats){
        if (err) {
          console.log('Erro2:', err)
          errors++;
          return
        }
        if (stats.isDirectory()){
          console.log('[%s]', path+'/'+item);
          printDir(path+'/'+item);
        } else {
          console.log('   ',item);
        }
      });
    })  
  })
}
process.on('exit', function () {
  console.log(errors);
});
printDir(root_folder);
