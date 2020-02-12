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
        for (i=0; i < 10; i++) {
        console.log(response.data[i].venue.name);
        console.log(response.data[i].venue.city);
        console.log(response.data[i].datetime);
    }
})
.catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Sorry, this band doesn't have any upcoming shows.");
    }
    console.log(error.config);
  });
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