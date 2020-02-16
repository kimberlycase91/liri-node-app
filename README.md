# Liri-node-app
Liri is a command-line app that takes in user input and outputs relevant information. 

## What does it do?
Liri is able to search for upcoming concerts for a given band, provides information about a given song or movie. 

## How to use the app:
How to use the app on the command line
*To search for upcoming concerts input:
node liri.js concert-this <\artist>

* To search for song info input: 
node liri.js spotify-this-song <\song name>

* To search for movie info input:
node liri.js movie-this <\movie title>

* To run a command provided by a .txt file input:
node liri.js do-what-it-says

## How does it work?
Liri takes in arguments from the command line and interprets a command and a user input to search for. 

When given the 'concert' command, the app uses the axios npm to retrieve data from the bandsintown API and displays the relevant data in the console. 

When given the 'song' command, the app uses the spotify-api-npm to retrieve and display song info in the console. 

When given the 'movie' command, the app uses the axios npm to retrieve data from the omdb API and displays the relevant data in the console.

When given the 'do-what-it-says' command, the app can access a local .txt file and run the command and input that is in the .txt file. 

[Basic Demo](https://github.com/kimberlycase91/liri-node-app/blob/master/images/demo.mkv?raw=true)
