const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

const GITHUB_CLIENT_ID = "bd66365d9c1b591cd79a";
const GITHUB_CLIENT_SECRET = "97bac9c73acae6a4b7accf0ebadf2a65f2a05add";

passport.use(
	new GitHubStrategy(
		{
			clientID: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
			callbackURL: "http://localhost:3001/login/github/auth/github/callback",
		},
		(req, accessToken, refreshToken, profile, cb) => {
			// This function is called after the user has authenticated with GitHub
			// and GitHub has redirected the user back to your app.
			// The function should save the user's profile information (e.g. their name and email)
			// to the session,and call the callback with a null error and the user's profile.
			// For example:
			// req.session.user = {
			// 	name: profile.displayName,
			// 	email: profile.emails[0].value,
			// };
			cb(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	// console.log("Serializing user:", user);
	done(null, user);
});

passport.deserializeUser((user, done) => {
	console.log("DeSerialized user", user);

	done(null, user);
});
