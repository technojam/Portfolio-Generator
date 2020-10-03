const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { verifyAccessToken } = require("../webTokens/jwt");
const Form = mongoose.model("Post");
const User = mongoose.model("User");

//Getting user profile
router.get("/:id", (req, res) => {
  //get all details from form schema
});

//deleting user profile
router.delete("/deleteprofile/:id", verifyAccessToken, (req, res) => {
  //delete profile page
});

//updating form
router.put("/:id", (req, res) => {
  //get all details from form schema
});

module.exports = router;
