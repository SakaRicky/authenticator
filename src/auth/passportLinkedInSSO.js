const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;

/// Implement the LinkedIn strategy for passport.js
const callbackURL =
	process.env.NODE_ENV === "dev"
		? "http://localhost:3001/login/linkedin/auth/linkedin/callback"
		: "https://authenticator-ricky.onrender.com/login/linkedin/auth/linkedin/callback";

const LinkedInStrategyConfig = {
	clientID: LINKEDIN_CLIENT_ID,
	clientSecret: LINKEDIN_CLIENT_SECRET,
	callbackURL: callbackURL,
	scope: ["r_emailaddress", "r_liteprofile"],
};

passport.use(
	new LinkedInStrategy(
		LinkedInStrategyConfig,
		(accessToken, refreshToken, profile, cb) => {
			// This function is called after the user has authenticated with LinkedIn
			// and LinkedIn has redirected the user back to your app.
			// The function should save the user's profile information (e.g. their name and email)
			// to the session, and call the callback with a null error and the user's profile.
			// For example:

			// console.log("profile: ", profile);

			cb(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
