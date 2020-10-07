const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { verifyAccessToken } = require("../webTokens/jwt");
const Form = mongoose.model("Form");
const User = mongoose.model("User");

router.post("/createprofile", verifyAccessToken, (req, res) => {
  const { title, body, pic } = req.body;
  if (!title || !body || !pic) {
    return res.status(422).json({ error: "Plase add all the fields" });
  }
  req.user.password = undefined;
  const post = new Form({
    title,
    skill,
    photo,
    projects,
    contact,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//Getting user profile
router.get("/:id", (req, res) => {
  User.findOne({ _id: req.params._id })
    .select("-password")
    .then((user) => {
      Form.find({ postedBy: req.params.id })
        .populate("postedBy", "_id name")
        .exec((err, form) => {
          if (err) {
            return res.status(422).json({ error: err });
          }
          res.json({ user, form });
        });
    })
    .catch((err) => {
      return res.status(404).json({ error: "User not found" });
    });
});

//deleting user profile
router.delete("/deleteprofile/:formId", verifyAccessToken, (req, res) => {
  Form.findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ error: err });
      }
      if (post.form._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
});

//updating form
router.put("/update/:formId", (req, res) => {
  //get all details from form schema
});

module.exports = router;
