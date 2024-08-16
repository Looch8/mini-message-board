const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const description = "This is the message board";

app.get("/", (req, res) => {
	res.render("index", { description: description });
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
