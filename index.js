// Set up express
const express = require("express");
const app = express();
const port = 8000;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Load the route handlers
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

// Start listening for HTTP requests
app.listen(port, () => console.log(`Node server is running on port ${port}...`));
