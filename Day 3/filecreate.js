var fs = require('fs');

fs.writeFile('test.txt', 'Hello Worls!', function(err){
    if(err) throw err;
    console.log('File Created!');
});