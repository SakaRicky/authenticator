const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

require("dotenv").config();

const loginWithGoogleRoute = require("./routes/loginWithGoogle")(passport);
const loginWithGithubRoute = require("./routes/loginWithGithub")(passport);
const loginWithLinkedInRoute = require("./routes/loginWithLinkedIn")(passport);

require("./auth/passportGoogleSSO");
require("./auth/passportGithubSSO");
require("./auth/passportLinkedInSSO");

// Create a new express app
const app = express();

const corsOptions = {
	origin: [
		"http://localhost:5500/",
		"https://shiny-taiyaki-3a8f01.netlify.app",
	],
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(session({ secret: "SECRET" }));
// Use the passport.initialize() middleware to initialize Passport
app.use(passport.initialize());
// Use the passport.session() middleware to support persistent login sessions
app.use(passport.session());

app.use("/login/google", loginWithGoogleRoute);
app.use("/login/github", loginWithGithubRoute);
app.use("/login/linkedin", loginWithLinkedInRoute);
app.use("/getuser", (req, res) => {
	console.log("req.user in getuser: ", req.user);
	res.send(req.user);
});

module.exports = app;
