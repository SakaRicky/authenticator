const user = {
	serialize: (user, done) => {
		// console.log("Serializing user:", user);
		done(null, user);
	},

	deserializeUser: (user, done) => {
		console.log("DeSerialized user", user);

		done(null, user);
	},
};

module.exports = user;
