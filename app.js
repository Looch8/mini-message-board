const express = require("express");
const app = express();
const path = require("node:path");

//Middleware
app.use(express.urlencoded({ extended: true }));

//  EJS templates
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
const indexRoute = require("./routes/indexRoute");
const newMessageRoute = require("./routes/newMessageRoute");

app.use("/", indexRoute);
app.use("/new", newMessageRoute);
app.use("/new", indexRoute);

const PORT = 3000;
app.listen(PORT, () => {
	console.log("Express app");
});
