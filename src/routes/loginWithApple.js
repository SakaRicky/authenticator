const express = require("express");
const passport = require("passport");

const router = express.Router();

const successLoginUrl = "http://localhost:3000/login/success";
const errorLoginUrl = "http://localhost:3000/login/error";

// Implement the /auth/apple route to initiate the Apple authentication flow
app.get("/auth/apple", passport.authenticate("apple", { scope: ["email"] }));

// Implement the /auth/apple/callback route to handle the Apple authentication callback
app.get(
	"/auth/apple/callback",
	passport.authenticate("apple", { failureRedirect: "/login" }),
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
