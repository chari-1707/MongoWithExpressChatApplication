const express = require("express");
const chat = require("../models/chat.model.js");
const { log } = require("node:console");


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

// Show Edit Page
router.get("/:id/edit", async (req, res) => {
    const { id } = req.params;

    const foundChat = await chat.findById(id);

    res.render("edit.ejs", { foundChat });
});

// Update Chat
// Update Route
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;

    await chat.findByIdAndUpdate(id, {
        message: message
    });

    res.redirect("/chats");
});

//delete Route
router.delete("/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await chat.findByIdAndDelete(id);
    log(deletedChat)
    res.redirect("/chats");
})

module.exports = router;