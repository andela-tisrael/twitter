require('dotenv').config();


var Twitter = require('twit');
var client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
});

client.get('search/tweets', {q: 'manchester'}, function(error, tweets, response) {
  for (tweet in tweets.statuses)
   console.log(tweets.statuses[tweet].text + '\n');
});