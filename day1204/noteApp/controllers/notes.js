const noteService = require("../services/notes")

exports.createNote = (req,res)=>{
 const note = noteService.createNote(req.body)
//  res.send(`id is ${note.id},${note.title},${note.description}`)
res.json(note)
}

exports.getAllNotes = (req, res) => {
  const notes = noteService.getAllNotes();
  res.json(notes);
};

exports.getByIdNote = (req,res)=>{
const note = noteService.getByIdNote(parseInt(req.params.id))
if (!note) return res.status(404).json({ message: 'Note not found' });
res.json(note)
}

exports.updateNote = (req,res)=>{
const note = noteService.updateNote(parseInt(req.params.id),req.body)
res.json(note)
}

exports.deleteNote = (req,res)=>{
const note = noteService.deleteNote(parseInt(req.params.id))
if (!note) return res.status(404).json({ message: 'Note not found' });
  res.status(204).send();
}

// exports.getLog = (req,res)=>{
// const note = noteService.getLog(req.params.id)
// }











