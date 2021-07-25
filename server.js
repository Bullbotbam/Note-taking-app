const express = require("express");
const path = require("path");
const { uuid } = require("uuidv4");
const PORT = process.env.PORT || 3001;

const notes = require("./db/db.json");

const app = express();
const fs = require("fs");

// don't forget to
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/notes", (res, req) => {
  res.json(notes);
});

app.get("/notes", (res, req) => {
  res.sendFile(path.join(__dirname, "../public"));
});

app.get("/", (res, req) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//create post route to allow for notes to be composed
app.post("/api/notes", (req, res) => {
  req.body.id = notes.length.toString();
  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted");
  } else {
    // add notes to json file and notes array in this function
    const note = createNewNote(req.body, notes);
    res.json(req.note);
  }
});

app.listen(PORT, () => {
  console.log(`API server now on ${PORT}!`);
});
