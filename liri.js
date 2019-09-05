var fs = require('fs');

var functionType = process.argv[2];
var parameter = process.argv[3];

if (functionType == 'concert') {
    var content = fs.readFileSync('./test.txt', 'utf8');


    console.log(content);
    console.log('concert says ');
    console.log(parameter);

    fs.writeFileSync('./test.txt', parameter, 'utf8');
} else if (functionType == 'spotify') {
    var content = fs.readFileSync('./test.txt', 'utf8');
    console.log('song ');
    console.log(parameter);


    fs.writeFileSync('./test.txt', parameter, 'utf8');
} else if (functionType == 'movie') {
    var content = fs.readFileSync('./test.txt', 'utf8');
    console.log('movie ');
    console.log(parameter);


    fs.writeFileSync('./test.txt', parameter, 'utf8');
} else { //default
    var content = fs.readFileSync('./test.txt', 'utf8');

    console.log('default');
    console.log('you did not enter a valid choice');

    //var newContent = content - parameter;

    //fs.writeFileSync('./test.txt', newContent, 'utf8');
}
