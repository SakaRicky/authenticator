const express = require("express");
const passport = require("passport");

const router = express.Router();

const successLoginUrl = "https://shiny-taiyaki-3a8f01.netlify.app/success.html"; //http://localhost:5500/success.html
const errorLoginUrl = "http://localhost:3000/login/error";

// Implement the /auth/github route to initiate the GitHub authentication flow
router.get("/", passport.authenticate("github", { scope: ["user:email"] }));

// Implement the /auth/github/callback route to handle the GitHub authentication callback
router.get(
	"/auth/github/callback",
	passport.authenticate("github", {
		failureRedirect: errorLoginUrl,
		successRedirect: successLoginUrl,
		session: true,
	}),
	(req, res) => {
		// If authentication was successful, the user's profile information will be
		// saved in the session and the user will be redirected to the home page.
		// If authentication failed, the user will be redirected to the login page.
		// res.redirect("/");
	}
);

module.exports = router;
