require("dotenv/config")
const express = require("express");
const connectmongoDB = require("./connection.js");
const chat = require("./models/chat.model.js");


connectmongoDB(process.env.MONGODB_URL).then(() => {
    console.log("MongoDB connected Succesfull");

    let chats = [
        {
            from: "Alice",
            to: "Bob",
            message: "Can you send me today's notes?",
            created_at: new Date()
        },
        {
            from: "Bob",
            to: "Alice",
            message: "Sure, I'll send them in a few minutes.",
            created_at: new Date()
        },
        {
            from: "David",
            to: "Emma",
            message: "Are we meeting for lunch today?",
            created_at: new Date()
        },
        {
            from: "Emma",
            to: "David",
            message: "Yes, let's meet at 1 PM.",
            created_at: new Date()
        },
        {
            from: "Sophia",
            to: "Liam",
            message: "Did you finish the project?",
            created_at: new Date()
        },
        {
            from: "Liam",
            to: "Sophia",
            message: "Almost done. I'll share it tonight.",
            created_at: new Date()
        },
        {
            from: "Noah",
            to: "Olivia",
            message: "Happy Birthday! Have a wonderful day.",
            created_at: new Date()
        },
        {
            from: "Olivia",
            to: "Noah",
            message: "Thank you so much!",
            created_at: new Date()
        },
        {
            from: "James",
            to: "Charlotte",
            message: "Can we reschedule our meeting?",
            created_at: new Date()
        },
        {
            from: "Charlotte",
            to: "James",
            message: "Sure, tomorrow works for me.",
            created_at: new Date()
        }

    ];

    chat.insertMany(chats);
}).catch((error) => {
    console.error(error)
})