var fs = require('fs');
var root_folder = '../../..';
var errors = 0;

function printDir(path){
  var files = [];
  try{
    files = fs.readdirSync(path)
  }catch(e){
    console.log('Erro:',e)
    errors++;
  }
  files.forEach(function(item){
    try{
      if (fs.statSync(path+'/'+item).isDirectory()){
        console.log('[%s]', path+'/'+item);
        printDir(path+'/'+item);
      } else {
        console.log('   ',item);
      }
    }catch(e){
      console.log('Erro2:', e)
      errors++;
    }
  })  
}

process.on('exit', function () {
  console.log(errors);
});
printDir(root_folder);
