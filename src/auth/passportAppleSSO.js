const passport = require("passport");
const AppleStrategy = require("passport-apple").Strategy;

const APPLE_CLIENT_ID = "your-apple-client-id";
const APPLE_CLIENT_SECRET = "your-apple-client-secret";

// Implement the Apple strategy for passport.js
passport.use(
	new AppleStrategy(
		{
			clientID: APPLE_CLIENT_ID,
			clientSecret: APPLE_CLIENT_SECRET,
			callbackURL: "/auth/apple/callback",
		},
		(accessToken, refreshToken, profile, cb) => {
			// This function is called after the user has authenticated with Apple
			// and Apple has redirected the user back to your app.
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
