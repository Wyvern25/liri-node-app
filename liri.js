require("dotenv").config();
var fs = require('fs');
var keys = require("./keys.js");
var spotifyKey = new Spotify
    (keys.spotify);

var functionType = process.argv[2];
var parameter = process.argv[3];
var defaultArray = [];
function missingInfo() {
    var defaultCase = fs.readFileSync('./defaultCases.txt', 'utf8');
    defaultArray = defaultCase.split('\r\n');
}
function spotify() {
    var content = fs.readFileSync('./test.txt', 'utf8');
    console.log('song ');
    if (parameter === undefined) {
        missingInfo();
        var parameter = defaultArray[1];
        console.log(parameter);
    } else {
        console.log(parameter);
    }
    fs.writeFileSync('./test.txt', parameter, 'utf8');
}

if (functionType == 'concert') {
    var content = fs.readFileSync('./test.txt', 'utf8');


    //console.log(content);
    console.log('concert says ');
    if (parameter === undefined) {
        missingInfo();
        var parameter = defaultArray[2];
        console.log(parameter);
    } else {
        console.log(parameter);
    }
    fs.writeFileSync('./test.txt', parameter, 'utf8');
} else if (functionType == 'spotify') {
    spotify();
} else if (functionType == 'movie') {
    var content = fs.readFileSync('./test.txt', 'utf8');
    console.log('movie ');
    if (parameter === undefined) {
        missingInfo();
        var parameter = defaultArray[3];
        console.log(parameter);
    } else {
        console.log(parameter);
    }

    fs.writeFileSync('./test.txt', parameter, 'utf8');
} else { //default
    var content = fs.readFileSync('./defaultCases.txt', 'utf8');

    console.log('default: Spotify; Down with the Sickness');
    console.log('you did not enter a valid choice');
    spotify();
    //console.log(content);

    //var newContent = content - parameter;

    //fs.writeFileSync('./test.txt', newContent, 'utf8');
}
