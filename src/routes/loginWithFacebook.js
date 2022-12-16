const express = require("express");
const passport = require("passport");

const router = express.Router();

//"https://shiny-taiyaki-3a8f01.netlify.app/success.html"
const successLoginUrl =
	process.env.NODE_ENV === "dev"
		? "http://localhost:5500/success.html"
		: "https://shiny-taiyaki-3a8f01.netlify.app/success.html";
const errorLoginUrl = "https://shiny-taiyaki-3a8f01.netlify.app/error.html";

// Implement the /auth/facebook route to initiate the Facebook authentication flow
router.get("/", passport.authenticate("facebook", { scope: ["email"] }));

// Implement the /auth/facebook/callback route to handle the Facebook authentication callback
router.get(
	"/auth/facebook/callback",
	passport.authenticate("facebook", {
		failureRedirect: errorLoginUrl,
		successRedirect: successLoginUrl,
	})
);

module.exports = router;
