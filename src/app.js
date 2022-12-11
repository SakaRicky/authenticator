const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

require("dotenv").config();

const loginWithGoogleRoute = require("./routes/loginWithGoogle");

require("./auth/passportGoogleSSO");

// Create a new express app
const app = express();
app.use(
	cors({
		origin: "*",
	})
);

app.use(express.json());
// Use the passport.initialize() middleware to initialize Passport
app.use(passport.initialize());

app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: true },
	})
);

// Use the passport.session() middleware to support persistent login sessions
app.use(passport.session());

app.use("/login/google", loginWithGoogleRoute);

module.exports = app;
