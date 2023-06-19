const express = require("express");


const app = express()

app.get("/", (req, res) => {

    const ip =
        req.headers['cf-connecting-ip'] ||
        req.headers['x-real-ip'] ||
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress || '';

    console.log(typeof ip)

    if (ip === "13.48.13.41") {
        res.sendFile(__dirname + "/Done.html");

    } else {
        res.sendFile(__dirname + "/offline.html");
    }



})

app.listen(7000, () => {
    console.log("Server Conneected DOne...!")
})