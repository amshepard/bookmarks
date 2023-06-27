const express = require("express");
const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmark.js");

bookmarks.get("/", (req, res) => {
  res.json(bookmarksArray);
});

// SHOW
bookmarks.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  res.json(bookmarksArray[arrayIndex]);
});

// SHOW
bookmarks.get("/:arrayIndex", (req, res) => {
  if (bookmarksArray[req.params.arrayIndex]) {
    res.json(bookmarksArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// CREATE
bookmarks.post("/", (req, res) => {
  bookmarksArray.push(req.body);
  res.json(bookmarkArray[bookmarkArray.length - 1]);
});

const validateURL = (req, res, next) => {
  console.log(
    "This function checks the validity of the URL entered by the user"
  );
};

// CREATE
bookmarks.post("/", validateURL, (req, res) => {
  bookmarksArray.push(req.body);
  res.json(bookmarksArray[bookmarksArray.length - 1]);
});




module.exports = bookmarks;