const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

const LINKEDIN_CLIENT_ID = "your-linkedin-client-id";
const LINKEDIN_CLIENT_SECRET = "your-linkedin-client-secret";

/// Implement the LinkedIn strategy for passport.js
passport.use(
	new LinkedInStrategy(
		{
			clientID: LINKEDIN_CLIENT_ID,
			clientSecret: LINKEDIN_CLIENT_SECRET,
			callbackURL: "/auth/linkedin/callback",
		},
		(accessToken, refreshToken, profile, cb) => {
			// This function is called after the user has authenticated with LinkedIn
			// and LinkedIn has redirected the user back to your app.
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
