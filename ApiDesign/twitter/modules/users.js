const twitter = require('./twitter');

function getUser({ user_id, screen_name }, callback) {
    twitter.get('/users/show', user_id ? { user_id: user_id } : { screen_name: screen_name }, callback);
}

module.exports = {
    getUser: getUser
};