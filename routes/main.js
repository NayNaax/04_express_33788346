// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
// Handle the routes
router.get("/", (req, res) => res.send("Hello World!")); // Main page of localhost:8000

router.get("/welcome/:name", (req, res) => {
    const { name } = req.params;
    res.send("Welcome " + name);
}); // Sub page of localhost:8000/welcome

router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));
// Sub page - localhost:8000/about

router.get("/contact", (req, res) =>
    res.send("<h1>This is the contact page. my github is https://github.com/NayNaax/04_express_33788346</h1>")
); // Sub page - localhost:8000/contact

router.get("/date", (req, res) => {
    const d = new Date(); // constant date function to call upon
    res.send("This is the date: " + d.toLocaleString());
}); // Sub page - localhost:8000/date

// Chained route handlers
router.get(
    "/chain",
    (req, res, next) => {
        console.log("This is the first handler.");
        next(); // Pass control to the next handler
    },
    (req, res) => {
        res.send("This is the second handler!");
    }
);

// Route to render the a.html file
router.get("/file", (req, res) => {
    res.sendFile(__dirname + "/a.txt");
});

// Export the router object so index.js can access it
module.exports = router;
