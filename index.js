var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function(err, data) {
    console.log(data);
    fs.writeFile('./output.txt', data , function(err) {
        if (err) throw err;
        console.log('Zapisano!'.green);
        fs.readFile('./output.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});