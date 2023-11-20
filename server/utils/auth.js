const jwt = require('jsonwebtoken');
require('dotenv')

const expiration = "1h";
const secret = "mysecret";

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;
        if(req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if(!token) {
            return req;
        }
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data
        } catch(error) {
            console.error(error);
            console.log("Invalid Token");
        }
        return req;
    },
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};