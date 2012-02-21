var fs = require('fs');
var root_folder = '/Users/fabricio';

var files = fs.readdirSync(root_folder)
files.forEach(function(item){
  if (fs.statSync(root_folder+'/'+item).isDirectory()){
    console.log('[%s]', item);
  } else {
    console.log(item);
  }
})