const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../model/User");
const createError = require("http-errors");
const crypto = require("crypto");
const Joi = require("@hapi/joi");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const { SENDGRID_API, EMAIL } = require("../config/keys");
const keys = require("../config/keys");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: keys.SENDGRID_API_KEY,
    },
  })
);

const {
  signAccessToken,

  signRefreshToken,
  verifyRefreshToken,
} = require("../webToken/jwt");

// registration validation

const authschema = Joi.object({
  name: Joi.string().min(5).max(50),
  email: Joi.string().min(5).max(255).email(),
  password: Joi.string().min(5).max(255),
});

//registration using user schema
router.post("/register", async (req, res, next) => {
  try {
    console.log("PASSING");
    console.log(req.body);
    const result = await authschema.validateAsync(req.body);
    console.log("PASSED!");
    const doesExist = await User.findOne({
      email: result.email,
    });
    if (doesExist)
      throw createError.Conflict(`${result.email} is already been registered`);

    const user = new User(result);
    const savedUser = await user.save();
    const accessToken = await signAccessToken(savedUser.id);
    const refreshToken = await signRefreshToken(savedUser.id);
    res.send({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});

//login validation
const loginschema = Joi.object({
  email: Joi.string().min(5).max(255).required().email(),
  password: Joi.string().min(5).max(255).required(),
});

//login
router.post("/login", async (req, res, next) => {
  try {
    const result = await loginschema.validateAsync(req.body);
    const user = await User.findOne({
      email: result.email,
    });
    if (!user) throw createError.NotFound("User not registered");

    const isMatch = await user.isValidPassword(result.password);
    if (!isMatch) throw createError.Unauthorized("Username/password not valid");

    const accessToken = await signAccessToken(user.id);
    const refreshToken = await signRefreshToken(user.id);

    res.send({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    if (error.isJoi === true)
      return next(createError.BadRequest("Invalid Username/Password"));
    next(error);
  }
});

//jwt refresh if expires

router.post("/refresh-token", async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) throw createError.BadRequest();
    const userId = await verifyRefreshToken(refreshToken);

    const accessToken = await signAccessToken(userId);
    const refToken = await signRefreshToken(userId);
    res.send({
      accessToken: accessToken,
      refreshToken: refToken,
    });
  } catch (error) {
    next(error);
  }
});

//delete route

router.delete("/logout", async (req, res, next) => {
  console.log("logout");
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) throw createError.BadRequest();
    const userId = await verifyRefreshToken(refreshToken);
    client.DEL(userId, (err, val) => {
      if (err) {
        console.log(err.message);
        throw createError.InternalServerError();
      }
      console.log(val);
      res.sendStatus(204);
    });
  } catch (error) {
    next(error);
  }
});

router.post("/reset-password", (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(422)
          .json({ error: "User dont exists with that email" });
      }
      user.resetToken = token;
      user.expireToken = Date.now() + 3600000;
      user.save().then((result) => {
        transporter.sendMail({
          to: user.email,
          from: "no-replay@portfolio_generator.com",
          subject: "password reset",
          html: `
                     <p>You requested for password reset</p>
                     <h5>click in this <a href="${EMAIL}/reset/${token}">link</a> to reset password</h5>
                     `,
        });
        res.json({ message: "check your email" });
      });
    });
  });
});

router.post("/new-password", (req, res) => {
  const newPassword = req.body.password;
  const sentToken = req.body.token;
  User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then((user) => {
      if (!user) {
        return res.status(422).json({ error: "Try again session expired" });
      }
      bcrypt.hash(newPassword, 12).then((hashedpassword) => {
        user.password = hashedpassword;
        user.resetToken = undefined;
        user.expireToken = undefined;
        user.save().then((saveduser) => {
          res.json({ message: "password updated success" });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
