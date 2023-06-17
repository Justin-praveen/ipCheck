const express = require("express");



const app = express()

app.get("/", (req, res) => {

    res.send(req.ip)

})

app.listen(7000, () => {
    console.log("Server Conneected DOne...!")
})