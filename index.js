const express = require("express");


const app = express()

app.get("/", (req, res) => {

    const ip =
        req.headers['cf-connecting-ip'] ||
        req.headers['x-real-ip'] ||
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress || '';

    res.json({
        ip
    })

})

app.listen(7000, () => {
    console.log("Server Conneected DOne...!")
})