var twitter = require("twitter");
var spotify = require("node-spotify-ap");
var request = require("request");
var fs = require("fs");

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

var spotify = new Spotify({
  id: '2db7066a81cb42f3b99728b94e586335',
  secret: '7b8342a1c65f4e73bd8a53bab44918e4'
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data);
});

request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
