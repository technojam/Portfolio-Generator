const express = require('express')
const mongoose = require('mongoose')
const keys = require("./config/dev");

const app = express();













mongoose.connect(
    keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },

    () => {
        console.log("connected to db");
    }
);
mongoose.set("useCreateIndex", true);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});