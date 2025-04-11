const express = require('express');
const app = express();
const PORT = 3000;

// In-memory "database"
let notes = [
  { id: 1, title: "Shopping List", content: "Milk, Bread, Eggs" },
  { id: 2, title: "Meeting Notes", content: "Project kickoff at 10AM" }
];

// Middleware
app.use(express.json());

// Routes

// Get all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// Get a single note
app.get('/api/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).send("Note not found");
  res.json(note);
});

// Create a new note
app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;
  const newNote = {
    id: notes.length + 1,
    title,
    content
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Update a note
app.put('/api/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).send("Note not found");

  const { title, content } = req.body;
  note.title = title || note.title;
  note.content = content || note.content;

  res.json(note);
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
  notes = notes.filter(n => n.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
