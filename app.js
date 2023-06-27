// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

const bookmarksController = require("./controllers/bookmarksController.js");
app.use("/bookmarks", bookmarksController);
app.use((req, res, next) => {
  console.log("This code runs for every request");
  next();
});

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });

// EXPORT
module.exports = app;
