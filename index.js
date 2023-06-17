const express = require("express");



const app = express()

app.get("/", (req, res) => {

    res.send(req.socket.remoteAddress)

})

app.listen(7000, () => {
    console.log("Server Conneected DOne...!")
})