const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");

require("dotenv").config();

const loginWithGoogleRoute = require("./routes/loginWithGoogle");
const loginWithGithubRoute = require("./routes/loginWithGithub");
const loginWithLinkedInRoute = require("./routes/loginWithLinkedIn");
const loginWithFacebookRoute = require("./routes/loginWithFacebook");

const user = require("./auth/passport-serialize");

// Create a new express app
const app = express();

const corsOptions = {
	origin: [
		"http://localhost:5500/",
		"https://shiny-taiyaki-3a8f01.netlify.app",
	],
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(session({ secret: "SECRET", resave: true, saveUninitialized: false }));
// Use the passport.initialize() middleware to initialize Passport
app.use(passport.initialize());
// Use the passport.session() middleware to support persistent login sessions
app.use(passport.session());

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);

require("./auth/passportGoogleSSO");
require("./auth/passportGithubSSO");
require("./auth/passportLinkedInSSO");
require("./auth/passportFacebookSSO");

// Add headers before the routes are defined
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	if (req.headers.origin) {
		res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
	}

	// Request methods you wish to allow
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);

	// Request headers you wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type"
	);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);

	// Pass to next layer of middleware
	next();
});

passport.serializeUser(user.serialize);
passport.deserializeUser(user.deserializeUser);

app.use("/login/google", loginWithGoogleRoute);
app.use("/login/github", loginWithGithubRoute);
app.use("/login/linkedin", loginWithLinkedInRoute);
app.use("/login/facebook", loginWithFacebookRoute);
app.use("/getuser", (req, res) => {
	console.log("req.user in getuser: ", req);
	res.send(req.user);
});

module.exports = app;
