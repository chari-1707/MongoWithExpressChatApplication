const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const chatSchema = new Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    message: {
        type: String,
        maxLength: 50
    },
    created_at: {
        type: Date
    }
})

const chat = model("chat", chatSchema);

module.exports = chat;