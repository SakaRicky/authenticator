const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

const FACEBOOK_APP_ID = process.env.FACEBOOK_TEST_CLIENT_ID;
const FACEBOOK_TEST_CLIENT_SECRET = process.env.FACEBOOK_TEST_CLIENT_SECRET;

const callbackURL =
	process.env.NODE_ENV === "dev"
		? "http://localhost:3001/login/facebook/auth/facebook/callback"
		: "https://authenticator-ricky.onrender.com/login/google/auth/facebook/callback";

const facebookStrategyConfig = {
	clientID: FACEBOOK_APP_ID,
	clientSecret: FACEBOOK_TEST_CLIENT_SECRET,
	callbackURL: callbackURL,
	passReqToCallback: true,
};

// Implement the Facebook strategy for passport.js
passport.use(
	new FacebookStrategy(
		facebookStrategyConfig,
		(req, accessToken, refreshToken, profile, cb) => {
			// This function is called after the user has authenticated with Facebook
			// and Facebook has redirected the user back to your app.
			// The function should save the user's profile information (e.g. their name and email)
			// to the session, and call the callback with a null error and the user's profile.
			// For example:
			// req.session.user = {
			// 	name: profile.displayName,
			// 	email: profile.emails[0].value,
			// };
			console.log("profile: ", profile);
			cb(null, profile);
		}
	)
);
