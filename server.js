const express = require('express');

const PORT = process.env.PORT || 3001;

const notes = require('./db/db.json');

const app = express();
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use('/', htmlRoutes);
// don't forget to
app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// the get call to reach the notes
app.get('/api/notes', (req, res) => {
	return res.json(notes);
});

app.post('/api/notes', (req, res) => {
	// set id based on what the next index of the array will be
	req.body.id = notes.length.toString();

	if (!validateNote(req.body)) {
		res.status(400).send('The note is not properly formatted.');
	} else {
		const nextNotes = writeNote(req.body, notes);
		res.json(nextNotes);
	}
});

// routes to index file for app
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});
// routes to notes file for app

app.get('/notes', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/notes.html'));
});
// the function to save notes
const writeNote = (body, notesArray) => {
	const note = body;
	notesArray.push(note);
	console.log(notes);
	fs.writeFileSync(
		path.join(__dirname, './db/db.json'),
		JSON.stringify(notesArray, null, 2)
	);
	console.log(notes);
	return note;
};
// function to make sure there is a note before writing to the object holding notes
function validateNote(note) {
	if (note.title === '') {
		return false;
	}
	return true;
}
// function to delete the note
function deleteNote(id, notesArray) {
	for (let i = 0; i < notesArray.length; i++) {
		let note = notesArray[i];

		if (note.id == id) {
			notesArray.splice(i, 1);
			fs.writeFileSync(
				path.join(__dirname, './db/db.json'),
				JSON.stringify(notesArray, null, 2)
			);
			break;
		}
	}
}
app.delete('/api/notes/:id', (req, res) => {
	deleteNote(req.params.id, notes);
	res.json(true);
});
app.listen(PORT, () => {
	console.log(`API server now on ${PORT}!`);
});
