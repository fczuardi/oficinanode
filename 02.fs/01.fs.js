var fs = require('fs');
var root_folder = '/Users/fabricio';

var files = fs.readdirSync(root_folder)
console.log(files);