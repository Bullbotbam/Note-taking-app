const express = require("express");
const path = require("path");
const { uuid } = require("uuidv4");
const PORT = process.env.PORT || 3001;

const notes = require("./db/db.json");

const app = express();
const fs = require("fs");

const { notes } = require("./db/db.json");
const htmlRoutes = require("./routes/htmlRoutes/html");
const apiRoutes = require("./routes/apiRoutes/noteRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use('/', htmlRoutes);
// don't forget to
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(notes, "1notes");

app.get("/notes", (req, res) => {
  return res.json(notes);
});
console.log(notes, "2notes");

app.listen(PORT, () => {
  console.log(`API server now on ${PORT}!`);
});
