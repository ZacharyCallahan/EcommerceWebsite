const jwt = require("jsonwebtoken");
const secret = "ThisIsASecretKey";
// module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.userCookie, secret, (err, payload) => {
        
        console.log("payload: ", payload);
        
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            next();
        }
    });
}

