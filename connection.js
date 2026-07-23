const mongoose = require("mongoose")

const connectmongoDB = async (connectionURL) => {
    const connection = await mongoose.connect(connectionURL);
    return connection;
}
module.exports = connectmongoDB;