const bcrypt = require ("bcryptjs")
const jwt = require("jsonwebtoken")

exports.hashPassword = async (req, res, next) => {
    try {
        if(req.body.password){
            req.body.password = await bcrypt.hash(req.body.password, 8)
        }
        next()
    } catch (error) {
        res.status(500).send(error)
    }
}


//TOKEN
exports.createToken = async (req, res, next) => {
    try {
        const token = jwt.sign({email: req.body.email}, process.env.SECRET)           //user email,name,password info. token is created with some form of personal info
        req.token = token
        next()
    
    } catch (error) {
        res.status(500).send(error)
    }
}