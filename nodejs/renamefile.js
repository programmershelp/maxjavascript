// include file system module
var fs = require('fs');
 
//rename the file
fs.rename('sample.txt', 'sample_new.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed.');
});