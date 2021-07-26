
const router = require('express').Router();
// const { createNewNote, ValidateNote } = require('..');
 const { notes }  = require('../db/db');

// router.use(apiRoutes);

// build the get route for api/notes response with notes in database


// we need get to /notes, we need a post to /notes, and we need a delete post to /notes/:id

app.get("api/notes", (res, req) => {
   return res.json(notes);
});

app.post('/api/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  res.json(req.body);
});

// // router.post to add notes to database
// // Hey this is not complete to this code
// app.post('/notes', (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = notes.length.toString();

//   if (!ValidateNote(req.body)) {
//     res.status(400).send('The note is not properly formatted.');
//   } else {
//     const animal = createNewNote(req.body, notes);
//     res.json(notes);
//   }
// });

//   const sql = `INSERT INTO votes (voter_id, candidate_id) VALUES (?,?)`;
//   const params = [body.voter_id, body.candidate_id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: body,
//       changes: result.affectedRows,
//     });
//   });
// });

// // route to delete notes using router.delete
// //  this example will need to be corrected to meet this application
// // Delete a voter
// router.delete("/api/notes/:id", (req, res) => {

//   db.query(sql, req.params.id, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: res.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: "Note not found",
//       });
//     } else {
//       res.json({
//         message: "deleted",
//         changes: result.affectedRows,
//         id: req.params.id,
//       });
//     }
//   });
// });

// // according to project requirements there needs to be a write file funciton.  This is where i need to convert the syntax for this app

// // writing files to database , still needs to be changed to work with this app
// const writeFile = (fileContent) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile("./dist/index.html", fileContent, (err) => {
//       if (err) {
//         reject(err);
//         return true;
//       }

//     });
//   });
// };

// app.get('/api/notes', (req, res) => {
//     let results = notes;
//     console.log(req.query)
//     res.json(results);
//   });
// // app.get("/", (res, req) => {
// //   return index.html;
// // });

// //create post route to allow for notes to be composed
// app.post("/api/notes", (req, res) => {
//   // req.body is where our incoming content will be
//   // set id based on what the next index of the array will be
//   req.body.id = notes.length.toString();
//   // if any data in req.body is incorrect, send 400 error back
//   if (!validateNote(req.body)) {
//     res.status(400).send("The note is not properly formatted");
//   } else {
//     // add notes to json file and notes array in this function
//     const note = createNewNote(req.body, notes);
//     res.json(req.note);
//   }
// });
