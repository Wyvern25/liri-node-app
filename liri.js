require("dotenv").config();
var moment = require('moment');
const axios = require('axios');
var fs = require('fs');
var keys = require("./keys.js");
/*var spotifyKey = new Spotify
    (keys.spotify);
*/
var functionType = process.argv[2];
var parameterArray = process.argv.slice(3)
var parameter = parameterArray.join(' ');
var defaultArray = [];
function missingInfo() {
    var defaultCase = fs.readFileSync('./defaultCases.txt', 'utf8');
    defaultArray = defaultCase.split('\r\n');
}
/*function spotify() {
    var content = fs.readFileSync('./test.txt', 'utf8');
    console.log('song ');
    if (process.argv[3] === undefined) {
        missingInfo();
        var parameter = defaultArray[1];
        console.log('No song entered. Default: Down with the Sickness');
        console.log('');
    } else {
        console.log(parameter);
    }
    fs.writeFileSync('./test.txt', parameter, 'utf8');
}
*/
if (functionType == 'concert') {
    var content = fs.readFileSync('./test.txt', 'utf8');



    if (process.argv[3] === undefined) {
        missingInfo();
        var parameter = defaultArray[2];
        console.log('No artist entered. Default: Disturbed');
        console.log('');
    }
    axios.get("https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp")
        .then(function (response) {
            //console.log('the value ' + parameter);
            //console.log(process.argv);
            var counter = 5;
            if (response.data.length < 5) {
                counter = response.data.length;
            }
            for (var i = 0; i < counter; i++) {
                console.log('Lineup: ' + response.data[i].lineup);
                console.log('Name of Venue: ' + response.data[i].venue.name);
                console.log('Country: ' + response.data[i].venue.country);
                console.log('State: ' + response.data[i].venue.region);
                console.log('City: ' + response.data[i].venue.city);
                console.log('Start Time: ' + moment(response.data[i].datetime).format("dddd, MMMM Do YYYY, h:mm:ss a"));
                console.log('');
            }
        });
    fs.writeFileSync('./test.txt', parameter, 'utf8');
}/* else if (functionType == 'spotify') {
    spotify();
}*/ else if (functionType == 'movie') {

    if (process.argv[3] === undefined) {
        missingInfo();
        var parameter = defaultArray[3];
        console.log('No movie entered. Default: The Game');
        console.log('');
    }
    axios.get('http://www.omdbapi.com/?t=' + parameter + '&apikey=trilogy')
        .then(function (response) {
            // handle success
            var myJSON = JSON.stringify(response.data);
            //console.log(myJSON);
            //console.log(response.data);
            console.log('Title: ' + response.data.Title);
            console.log('Year: ' + response.data.Year);
            console.log('IMDB Rating: ' + response.data.imdbRating);
            console.log('Rotten Tomatoes Rating: ' + response.data.Ratings[1].Value);
            console.log('Country: ' + response.data.Country);
            console.log('Language: ' + response.data.Language);
            console.log('Plot: ' + response.data.Plot);
            console.log('Actors: ' + response.data.Actors);




        })
    /*var content = fs.readFileSync('./test.txt', 'utf8');
    console.log('movie ');
    if (parameter === undefined) {
        missingInfo();
        var parameter = defaultArray[3];
        console.log(parameter);
    } else {
        console.log(parameter);
    }

    fs.writeFileSync('./test.txt', parameter, 'utf8');*/
} else { //default
    var content = fs.readFileSync('./defaultCases.txt', 'utf8');

    console.log('default: Spotify; Down with the Sickness');
    console.log('you did not enter a valid choice');
    console.log('');
    //spotify();
    //console.log(content);

    //var newContent = content - parameter;

    //fs.writeFileSync('./test.txt', newContent, 'utf8');
}
