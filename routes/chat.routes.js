const express = require("express");
const chat = require("../models/chat.model.js");


const router = express.Router();

router.get("/", async (req, res) => {
    let chats = await chat.find();
    console.log(chats);
    res.render("index.ejs", { chats })
})

//new Route
router.get("/new", async (req, res) => {
    res.render("new.ejs")
})

//Create Route
router.post("/", (req, res) => {
    let { from, to, message } = req.body;
    let newChat = new chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    })
    newChat.save().then((res) => {
        console.log("chat was saved");
    }).catch((error) => {
        console.log(error)
    })
    res.redirect("/chats")
})

module.exports = router;