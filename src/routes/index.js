const { Router } = require("express")
const {
    addUser,
    login,
    updateUser,
    deleteUser
} = require("./user.controllers")
const { hashPassword, createToken, decodeToken } = require("./middleware")
const { decodeToken } = require("../middleware")
const { tokenLogin } = require("../controllers")
const userRouter = Router()

userRouter.get("/user", decodeToken, tokenLogin)
userRouter.post("/user", hashPassword, createToken, addUser) // add/create user
userRouter.put("/user", hashPassword, updateUser) //update user
userRouter.delete("/user/:email", deleteUser)
userRouter.post("/user/login", createToken, login)

module.exports = userRouter

//when token is added onto endpoints(routers) they need to be amended in controllers.index.js