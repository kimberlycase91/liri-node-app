require("dotenv").config();

var keys = require("keys.js");

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var input = process.argv;
var inputArray = [];

for (i=2; i < input.length; i++) {
    
}

//node liri.js concert-this <artist/band name here>
function concert(input) {
    var artist = input;
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(function(response){
        console.log(response)
    })
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