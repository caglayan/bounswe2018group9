const express = require('express');
const router = express.Router();

const Trends = require('./trends');
const Users = require('./users');
const Tweets = require('./tweets');

// Tweets module router
router.get('/tweets', Tweets.getTweetsContaining);
router.post('/tweets', Tweets.postTweet);
router.get('/home', Tweets.getHome);

// Users module router
router.get('/users', Users.getUser);

// Trends module router
router.get('/trends/:countryName', Trends.getTrendsForCountry);

module.exports = router;
