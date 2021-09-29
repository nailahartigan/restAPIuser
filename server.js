require("./db/connection") //connecting to mongo URI
const express = require("express") //let us use express methods
const cors = require("cors")  //cross origin resource share
const app = express()

const userRouter = require("./routes")

app.use(express.json())
app.use(cors())
app.use(userRouter)  //lets us use endpoints

app.listen(5000, () => {
    console.log("Listening on port 5000")
})