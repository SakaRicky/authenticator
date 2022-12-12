const express = require("express");
const passport = require("passport");

const router = express.Router();

const successLoginUrl = "https://shiny-taiyaki-3a8f01.netlify.app/success.html";
const errorLoginUrl = "http://localhost:3000/login/error";

// Implement the /auth/linkedin route to initiate the LinkedIn authentication flow
router.get(
	"/",
	passport.authenticate("linkedin", {
		scope: ["r_emailaddress", "r_liteprofile"],
	})
);

// Implement the /auth/linkedin/callback route to handle the LinkedIn authentication callback
router.get(
	"/auth/linkedin/callback",
	passport.authenticate("linkedin", {
		failureRedirect: errorLoginUrl,
		successRedirect: successLoginUrl,
	}),
	(req, res) => {
		// the authed user
		// console.log("req.user: ", req.user);
	}
);

module.exports = router;
