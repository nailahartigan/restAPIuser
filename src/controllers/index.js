const User = require("./user.model")
const bcrypt = require("bcryptjs")


//CREATE
exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(200).send({newUser, token: req.token, message: "new user added"})
    } catch (error) {
        res.status(500).send(error)
    }
}

//LOGIN-READ
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email}) //got user - find the user
        if(await bcrypt.compare(req.body.password, user.password)){  //comparing the 2 passwords. if true, will go onto line 22. if not, throw error and catch block 
            res.status(200).send({user, token: req.token, message: "Login complete"})
        } else {
            throw new Error()
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

//UPDATE
exports.updateUser = async (req, res) => {
    try {
        await User.updateOne({email: req.body.email})  //searching by email, more secure. 
        { $set: { [req.body.key]; req.body.update }}   //syntax to access within object. wrap in sq brackets & pass variable. updateUser endpoint will take email, key & update
    res.status(200).send({message: "Updated"})
    } catch (error) {
        res.status(500).send(error)
    }
}

//DELETE
exports.update = async (req, res) => {
    try {
        await User.deleteOne({email: req.params.email}) //params because delete has no body or cannot send info
        res.status(200).send({message: "deleted"})
    } catch (error) {
        res.status(500).send(error)
    }
}


exports.tokenLogin = (req, res) => {
    try {
        res.status(200).send(req.user)
    } catch (error) {
        res.status(500).send(error)
    }
}