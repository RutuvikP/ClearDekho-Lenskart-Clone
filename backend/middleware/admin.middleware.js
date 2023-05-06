const jwt = require("jsonwebtoken");

const Adminmiddleware = (req, res, next) => {

    const token = req.headers.authorization

    if (token) {

        try {

            let decoded = jwt.verify(token.split(" ")[1], process.env._PRIVATE_KEY)



            if (decoded) {
                req.body.authorID = decoded.authorID
                req.body.author = decoded.author
                next()
            } else {
                res.send("Admin Login  Failed")
            }
            console.log(decoded)
        } catch (error) {
            res.send("error")
        }
    } else {
        res.send("try again ")
    }

}

module.exports = {
    Adminmiddleware
}