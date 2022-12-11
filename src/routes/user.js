const express = require("express");
const { isUserAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.get("/", isUserAuthenticated, (req, res) => {
	console.log("getting user");
	res.json(req.user);
});

module.exports = router;
