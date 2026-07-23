require("dotenv/config")
const express = require("express");
const connectmongoDB = require("./connection.js");
const chat = require("./models/chat.model.js");
const chatRoute = require("./routes/chat.routes.js")
const path = require("path");
const app = express();

const PORT = process.env.PORT ?? 8080;

app.use(express.json());
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

connectmongoDB(process.env.MONGODB_URL).then(() => {
    console.log("MongoDB connected Succesfull");

    app.use("/chats", chatRoute);

    app.listen(PORT, () => {
        console.log(`app is listening to the port ${PORT}`);
    })
}).catch((error) => {
    console.error(error)
})