const mongoose = require("mongoose")
require("dotenv").config()

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("we have connected!")
    } catch (error) {
        console.log("uh oh error")
    }
}

connection()