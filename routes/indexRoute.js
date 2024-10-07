const express = require("express");
const router = express.Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

//  Display all messages
router.get("/", (req, res) => {
	res.render("index", { title: "Mini Messageboard", messages });
});

//  Add new message
router.post("/", (req, res) => {
	messages.push({
		text: req.body.messageText,
		user: req.body.messageUser,
		added: new Date(),
	});
	// Redirect user back to home page after submitting message
	res.redirect("/");
});

module.exports = router;
