const express = require("express");

//ROUTES
const authRoute = require("./routes/auth");

//CHORE
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//mongo connect
mongoose.connect(
    "mongodb+srv://Shivansh:dojo@cluster0.n0cr0.mongodb.net/Clusters?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },

    () => {
        console.log("connected to db");
    }
);
mongoose.set("useCreateIndex", true);

//
const {
    verifyAccessToken
} = require("./webToken/jwt");
dotenv.config();
app.use(express.json());

//just a demo how to access private routes
app.get("/", verifyAccessToken, async (req, res, next) => {
    res.send("accessing private route");
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    });
});

//Route Middleware For Login And Signup routes
app.use("/api/user", authRoute);
app.listen(3000, () => console.log("server up and running"));