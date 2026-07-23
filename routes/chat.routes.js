const express = require("express");
const chat = require("../models/chat.model.js");


const router = express.Router();

router.get("/", async (req, res) => {
    let chats = await chat.find();
    console.log(chats);
    res.render("index.ejs", { chats })
})


module.exports = router;