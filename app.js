const express = require("express")
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.status(200).send("This is practice app!")
})

module.exports = app