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

router.get("/", (req, res) => {
	res.render("index", { title: "Mini Messageboard", messages });
});

router.post("/", (req, res) => {
	messages.push({
		text: req.body.messageText,
		user: req.body.messageUser,
		added: new Date(),
	});
});

module.exports = router;
