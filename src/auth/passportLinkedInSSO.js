const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

const LINKEDIN_CLIENT_ID = "78npoltxp4mugi";
const LINKEDIN_CLIENT_SECRET = "fncmWJhf5pVR0FHa";

/// Implement the LinkedIn strategy for passport.js
passport.use(
	new LinkedInStrategy(
		{
			clientID: LINKEDIN_CLIENT_ID,
			clientSecret: LINKEDIN_CLIENT_SECRET,
			callbackURL:
				"https://authenticator-ricky.onrender.com/login/linkedin/auth/linkedin/callback",
			scope: ["r_emailaddress", "r_liteprofile"],
		},
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
