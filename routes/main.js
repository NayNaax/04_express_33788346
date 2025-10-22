// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
// Handle the routes
router.get("/", (req, res) => {
    // Render the index.ejs page
    res.render("pages/index");
});

router.get("/welcome/:name", (req, res) => {
    const { name } = req.params;
    // Render the welcome.ejs page and pass the 'name' variable
    res.render("pages/welcome", { name: name });
});

router.get("/about", (req, res) => {
    // Render the about.ejs page
    res.render("pages/about");
});

router.get("/contact", (req, res) => {
    // Render the contact.ejs page
    res.render("pages/contact");
});

router.get("/date", (req, res) => {
    const d = new Date();
    // Render the date.ejs page and pass the 'dateString' variable
    res.render("pages/date", { dateString: d.toLocaleString() });
});

// Chained route handlers
router.get(
    "/chain",
    (req, res, next) => {
        console.log("This is the first handler.");
        next(); // Pass control to the next handler
    },
    (req, res) => {
        // You can just send a simple message or create another EJS page for this
        res.send("This is the second handler!");
    }
);

// Route to render the a.txt file
// This route is fine as-is, since it's meant to send a file, not a webpage
router.get("/file", (req, res) => {
    res.sendFile(process.cwd() + "/routes/a.txt"); // Use process.cwd() for a more reliable path
});

// Export the router object so index.js can access it
module.exports = router;
