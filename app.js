require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys");

var spotify = new Spotify(keys.spotify);

spotify.search({
    type: 'track',
    query: 'stranger than fiction'
}, function(err, res) {
    if(err){
        console.log(err);
    } 
    else{
        console.log(res)
    }
})