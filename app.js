const express = require("express");
const app = express();

// Routes
const indexRoute = require("./routes/index");

app.use("/", indexRoute);

const PORT = 3000;
app.listen(PORT, () => {
	console.log("Express app");
});
