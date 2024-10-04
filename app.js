const express = require("express");
const app = express();
const path = require("node:path");

//  EJS templates
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
const indexRoute = require("./routes/indexRoute");

app.use("/", indexRoute);

const PORT = 3000;
app.listen(PORT, () => {
	console.log("Express app");
});
