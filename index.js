const express = require("express");


const app = express()

app.get("/", (req, res) => {

    const ip =
        req.headers['cf-connecting-ip'] ||
        req.headers['x-real-ip'] ||
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress || '';

    console.log(typeof ip)

    if (ip === "16.170.141.217") {
        res.send("Ip Connected done")

    } else {
        res.send("not Connected")
    }



})

app.listen(7000, () => {
    console.log("Server Conneected DOne...!")
})