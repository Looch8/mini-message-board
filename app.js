const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// To include css files
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const description = "This is the message board";

const messages = [
	{
		text: "Hi there",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World",
		user: "Charles",
		added: new Date(),
	},
];

app.get("/", (req, res) => {
	res.render("index", { description: description, messages: messages });
});

// New message router

// app.get("/new", (req, res) => {
// 	res.render("");
// });

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
