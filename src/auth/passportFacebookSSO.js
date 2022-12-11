const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

const FACEBOOK_APP_ID = "your-facebook-app-id";
const FACEBOOK_APP_SECRET = "your-facebook-app-secret";

// Implement the Facebook strategy for passport.js
passport.use(
	new FacebookStrategy(
		{
			clientID: FACEBOOK_APP_ID,
			clientSecret: FACEBOOK_APP_SECRET,
			callbackURL: "/auth/facebook/callback",
		},
		(accessToken, refreshToken, profile, cb) => {
			// This function is called after the user has authenticated with Facebook
			// and Facebook has redirected the user back to your app.
			// The function should save the user's profile information (e.g. their name and email)
			// to the session, and call the callback with a null error and the user's profile.
			// For example:
			req.session.user = {
				name: profile.displayName,
				email: profile.emails[0].value,
			};
			cb(null, profile);
		}
	)
);
