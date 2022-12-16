const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

const callbackURL =
	process.env.NODE_ENV === "dev"
		? "http://localhost:3001/login/github/auth/github/callback"
		: "https://authenticator-ricky.onrender.com/login/github/auth/github/callback";

const GitHubStrategyConfig = {
	clientID: GITHUB_CLIENT_ID,
	clientSecret: GITHUB_CLIENT_SECRET,
	callbackURL: callbackURL,
};

passport.use(
	new GitHubStrategy(
		GitHubStrategyConfig,
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
