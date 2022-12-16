const express = require("express");
const passport = require("passport");

const router = express.Router();

//"https://shiny-taiyaki-3a8f01.netlify.app/success.html"
const successLoginUrl =
	process.env.NODE_ENV === "dev"
		? "http://localhost:5500/success.html"
		: "https://shiny-taiyaki-3a8f01.netlify.app/success.html";
const errorLoginUrl = "https://shiny-taiyaki-3a8f01.netlify.app/error.html";

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
	})
);

module.exports = router;
