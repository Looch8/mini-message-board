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

//  Display a specific message based on the index
router.get("/messages/:message", (req, res) => {
	const messageIndex = parseInt(req.params.message, 10); // Convert the message param to a number
	const message = messages[messageIndex];

	// If the message doesn't exist, handle it
	if (!message) {
		return res.status(404).send("Message not found");
	}

	// Render a new view that shows the individual message
	res.render("message", { message });
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
