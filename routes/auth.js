const router = require("express").Router();
const User = require("../model/User");
const createError = require("http-errors");
const Joi = require("@hapi/joi");

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
            email: result.email
        });
        if (doesExist)
            throw createError.Conflict(`${result.email} is already been registered`);

        const user = new User(result);
        const savedUser = await user.save();
        const accessToken = await signAccessToken(savedUser.id);
        const refreshToken = await signRefreshToken(savedUser.id);
        res.send({
            accessToken,
            refreshToken
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
            email: result.email
        });
        if (!user) throw createError.NotFound("User not registered");

        const isMatch = await user.isValidPassword(result.password);
        if (!isMatch) throw createError.Unauthorized("Username/password not valid");

        const accessToken = await signAccessToken(user.id);
        const refreshToken = await signRefreshToken(user.id);

        res.send({
            accessToken,
            refreshToken
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
        const {
            refreshToken
        } = req.body;
        if (!refreshToken) throw createError.BadRequest();
        const userId = await verifyRefreshToken(refreshToken);

        const accessToken = await signAccessToken(userId);
        const refToken = await signRefreshToken(userId);
        res.send({
            accessToken: accessToken,
            refreshToken: refToken
        });
    } catch (error) {
        next(error);
    }
});

//delete route

router.delete("/logout", async (req, res, next) => {

});

module.exports = router;