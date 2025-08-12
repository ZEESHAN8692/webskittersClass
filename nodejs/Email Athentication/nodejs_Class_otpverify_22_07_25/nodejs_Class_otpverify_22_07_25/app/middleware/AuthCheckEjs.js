const jwt = require("jsonwebtoken")
const AuthcheckEjs= (req, res, next) => {
    if (req.cookies && req.cookies.userToken) {
        jwt.verify(req.cookies.userToken,process.env.JWT_ACCESS_TOKEN_SECRET_KEY, (err, data) => {
            req.user = data
            next()
        })
    } else {
        next()
    }
}

module.exports = AuthcheckEjs;