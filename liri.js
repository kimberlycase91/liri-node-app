require("dotenv").config();

var keys = require("./keys");

var spotify = keys.spotify;

var axios = require("axios");

var input = process.argv;
var inputArray = [];

for (i=3; i < input.length; i++) {
  inputArray.push(input[i])
}
console.log(inputArray);

//node liri.js concert-this <artist/band name here>
function concert() {
    var artist = inputArray.join(" ").replace(",","")
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    console.log(artist)
    axios.get(queryURL).then(function(response){
        console.log(response)
    })
}

switch (process.argv[2]) {
    case "concert-this": 
    concert();
}


//node liri.js spotify-this-song '<song name here>'
function spotify() {

}

//node liri.js movie-this '<movie name here>'
function movie() {

}

//node liri.js do-what-it-says
function doWhat() {

}