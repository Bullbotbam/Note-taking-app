const express = require("express");
const path = require("path");
const { uuid } = require("uuidv4");
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs");

const { notes } = require('./db/db.json')
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use('/', htmlRoutes);
// don't forget to
app.use("/api", apiRoutes);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", (res, req) => {
  return notes.html;
});
app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
  });
// app.get("/", (res, req) => {
//   return index.html;
// });

//create post route to allow for notes to be composed
app.post("/api/notes", (req, res) => {
  // req.body is where our incoming content will be
  // set id based on what the next index of the array will be
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

app.listening(PORT, () => {
  console.log(`API server now on ${PORT}!`);
});
