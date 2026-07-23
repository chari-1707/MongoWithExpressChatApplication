require("dotenv/config")
const express = require("express");
const connectmongoDB = require("./connection.js");
const chat = require("./models/chat.model.js");
const path = require("path");
const app = express();

const PORT = process.env.PORT ?? 8080;

app.use(express.json());
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

connectmongoDB(process.env.MONGODB_URL).then(() => {
    console.log("MongoDB connected Succesfull");

    app.get("/", (req, res) => {
        res.status(200).json({ message: "successfull" })
    })

    let chat1 = new chat({
        from: "shafi nihal",
        to: "chari",
        message: "send me the exam papers",
        created_at: new Date()
    })

    chat1.save().then((res) => {
        console.log(res);
    })

    app.listen(PORT, () => {
        console.log(`app is listening to the port ${PORT}`);
    })
}).catch((error) => {
    console.error(error)
})