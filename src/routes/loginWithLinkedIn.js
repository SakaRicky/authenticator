const express = require("express");
const passport = require("passport");

const router = express.Router();

const successLoginUrl = "http://localhost:3000/login/success";
const errorLoginUrl = "http://localhost:3000/login/error";

// Implement the /auth/linkedin route to initiate the LinkedIn authentication flow
app.get(
	"/auth/linkedin",
	passport.authenticate("linkedin", { scope: ["r_emailaddress"] })
);

// Implement the /auth/linkedin/callback route to handle the LinkedIn authentication callback
app.get(
	"/auth/linkedin/callback",
	passport.authenticate("linkedin", { failureRedirect: "/login" }),
	(req, res) => {
		// If authentication was successful, the user's profile information will be
		// saved in the session and the user will be redirected to the home page.
		// If authentication failed, the user will be redirected to the login page.
		res.redirect("/");
	}
);

// router.get(
// 	"/auth/google/callback",
// 	passport.authenticate("google", {
// 		failureMessage: "Cannot login to Google, please try again later!",
// 		failureRedirect: errorLoginUrl,
// 		successRedirect: successLoginUrl,
// 	}),
// 	(req, res) => {
// 		console.log("User: ", req.user);
// 		res.send("Thank you for signing in!");
// 	}
// );

module.exports = router;
