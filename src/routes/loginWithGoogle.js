const express = require("express");
const passport = require("passport");

const router = express.Router();

const successLoginUrl = "http://127.0.0.1:5500/success.html";
const errorLoginUrl = "http://127.0.0.1:5500/error.html";

// Implement the /auth/google route to initiate the Google authentication flow
router.get(
	"/",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/auth/google/callback",
	passport.authenticate("google", {
		failureRedirect: errorLoginUrl,
		successRedirect: successLoginUrl,
	}),
	(req, res) => {
		console.log(req.user);
		res.send(req.user);
	}
);

module.exports = router;
