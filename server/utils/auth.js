const jwt = require('jsonwebtoken');
require('dotenv')

const expiration = "1h";
const secret = "mysecret";

module.exports = {
    authMiddleware: function (req, res, next) {
        let token =  req.headers.authorization || req.body.token || req.query.token ;
        

        if(req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if(!token) {
            return res.status(401).json({ error: "Unauthorized"});
        }
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data
            next();
        } catch(error) {
            console.error(error);
            console.log("Invalid Token");
        }
        return req;
    },
    signToken: function ({  firstName, lastName, _id }) {
        const payload = {  firstName, lastName, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};