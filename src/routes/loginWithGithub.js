const express = require("express");
const passport = require("passport");

const router = express.Router();

const successLoginUrl =
	process.env.NODE_ENV === "dev"
		? "http://localhost:5500/success.html"
		: "https://shiny-taiyaki-3a8f01.netlify.app/success.html";
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
	})
);

module.exports = router;
