var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'zLXLXcaJbGaqlEg2AAPOVAlhr',
  consumer_secret: 'pfoVQS9FKULdMIh2LWN92JNmCo8kEHxR8Jw8L557c3nrhy7WnB',
  access_token_key: '214817436-O0tqq7es8xhLyKK6ZyGPX4RFjvfykgQ70pFu6qyJ',
  access_token_secret: 'cOuofhJdF4Dj1pnDjv0we1zAtB1KBywpT0djW713L9sHt'
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

var Spotify = require('node-spotify-api');

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

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
