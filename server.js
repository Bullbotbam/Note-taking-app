const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs");

const notes = require('./db/db.json');

// const htmlRoutes = require('/routes/htmlRoutes');
// const apiRoutes = require("./routes/apiRoutes");


const path = require("path");
const { uuid } = require("uuidv4");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// don't forget to
// app.use("/api", apiRoutes);
// app.use('/', htmlRoutes);




app.get("/api/notes", (req, res) => {
    console.log(typeof notes, "1notes")

    return res.json(notes);
    
  });
  console.log(typeof notes, "2notes")

app.post('/api/notes', (req, res) => {
console.log(typeof notes, "3notes")
    let newNote = req.body;
    notes.push(newNote);
    writeNote();
    // // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  
    res.json(newNote);
  });
app.get('/api/notes/:id', (req, res) => {
    res.json(notes[req.params.id]);
})
app.delete('/api/notes/:id', (req, res) =>{
   deleteNote(req.params.id, notes)
    console.log(typeof notes, "4notes")

})


  app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});
// writing files to database , still needs to be changed to work with this app
const writeNote = () => {
 console.log(notes)
    fs.writeFile("db/db.json", JSON.stringify(notes, null, 2), (err) => {
      if (err) {
        console.log(notes)

        reject(err);
        return true;
      }

  });
};
// const writeNote = (body, notesArray) => {
//     const note = body;
//     notesArray.push(note);
//     console.log(notes)
//        fs.writeFileSync(path.join(__dirname, "..db/db.json"), JSON.stringify(notesArray, null, 2), 
//        );
//            console.log(notes)
//            return note;
// }
app.listen
(PORT, () => {
  console.log(`API server now on ${PORT}!`);
});
