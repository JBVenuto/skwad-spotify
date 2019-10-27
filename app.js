require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys");

var spotify = new Spotify(keys.spotify);

spotify.search({
    type: 'track',
    query: 'welcome to paradise'
}, function(err, res) {
    if(err){
        console.log('error: ', err);
    } 
    else{
        var data = res.tracks.items;
        for (i = 0; i < data.length; i++){
            console.log('artist:', data[i].artists[0].name);
            console.log('song:', data[i].name);
            console.log('album:', data[i].album.name);
            console.log('url:', data[i].external_urls.spotify);
            console.log('\n');
        }
    }
})