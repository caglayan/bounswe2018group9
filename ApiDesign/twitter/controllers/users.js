const twitter = require('../modules');

function getUser(request, response) {
    twitter.users.getUser(request.query, (err, data, twitterRes) => {
        if (err) {
            return response.status(err.statusCode).send({ message: err.message });
        }

        response.status(twitterRes.statusCode).send(data);
    });
}

module.exports = {
    getUser: getUser
};