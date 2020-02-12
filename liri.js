require("dotenv").config();
//accesses spotify keys
var keys = require("./keys");

//accesses the axios npm
var axios = require("axios");

//accesses the command line input then pushes it into an array starting at i=3 
var input = process.argv;
var inputArray = [];
for (i = 3; i < input.length; i++) {
    inputArray.push(input[i])
}

//node liri.js concert-this <artist/band name here>
function concert() {
    var artist = inputArray.join(" ").replace(",", "")
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    console.log(artist)
    axios.get(queryURL).then(function (response) {
        for (i = 0; i < 10; i++) {
            console.log(response.data[i].venue.name);
            console.log(response.data[i].venue.city);
            console.log(response.data[i].datetime);
        }
    })
        .catch(function (error) {
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

//node liri.js spotify-this-song '<song name here>'
function spotify() {
    //accesses node-spotify-api
    var Spotify = require("node-spotify-api");
    //pushes spotify keys to object to be used by node-spotify-api
    var spotify = new Spotify(keys.spotify);

    var song = inputArray.join(" ").replace(",", "")
    spotify.search({ type: 'track', query: song }).then(function(response) {
        for (var i = 0; i < response.tracks.items.length; i++) {
            console.log("Artist: ", response.tracks.items[i].artists[0].name);
            console.log("Song Name: ", response.tracks.items[i].name);
            console.log("URL: ", response.tracks.items[i].preview_url);
            console.log("Album: ", response.tracks.items[i].album.name);
            console.log("\n-------------------------------------\n");
        }
      })
      .catch(function(err) {
        console.log(err);
      });
}

//node liri.js movie-this '<movie name here>'
function movie() {

var movieName = inputArray.join(" ").replace(",", "")

// Then run a request with axios to the OMDB API with the movie specified
var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

"http://www.omdbapi.com/?t=Frozen&y=&plot=short&apikey=trilogy"

axios.get(queryURL).then(function(response) {
    // * Title of the movie.
    console.log(response.data.Title);
    // * Year the movie came out.
    console.log("Release Date: " + response.data.Year);
    // * IMDB Rating of the movie.
    console.log("IMDB Rating: " + response.data.imdbRating);
    // * Rotten Tomatoes Rating of the movie.
    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
    // * Country where the movie was produced.
    console.log("Produced in " + response.data.Country);
    // * Language of the movie.
    console.log("Movie language(s): " + response.data.Language);
    // * Plot of the movie.
    console.log(response.data.Plot);
    // * Actors in the movie.
    console.log("Starring: " + response.data.Actors);
})
.catch(function(error){
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
        console.log("Error", error.message);
      }
      console.log(error.config);
});

// This line is just to help us debug against the actual URL.
console.log(queryURL);
}

//node liri.js do-what-it-says
function doWhat() {

}

//switch/case to run functions from command line input
switch (process.argv[2]) {
    case "concert-this":
        concert();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        doWhat();
        break;
}
