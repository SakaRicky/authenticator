const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const callbackURL =
	process.env.NODE_ENV === "dev"
		? "http://localhost:3001/login/google/auth/google/callback"
		: "https://authenticator-ricky.onrender.com/login/google/auth/google/callback";

const googleStrategyConfig = {
	clientID: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_SECRET,
	callbackURL: callbackURL,
	passReqToCallback: true,
};

// Implement the Google strategy for passport.js
passport.use(
	new GoogleStrategy(
		googleStrategyConfig,
		(req, accessToken, refreshToken, profile, cb) => {
			// This function is called after the user has authenticated with Google
			// and Google has redirected the user back to your app.
			// The function should save the user's profile information (e.g. their name and email)
			// to the session, and call the callback with a null error and the user's profile.
			// For example:
			req.session.user = {
				name: profile.displayName,
				email: profile.emails[0].value,
			};
			// console.log("saved succesfully with profile: ", profile);
			cb(null, profile);
		}
	)
);
