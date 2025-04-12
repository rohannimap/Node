const logs = require('../middleware/logs')

let notes = []
// let info =  `${ new Date().toISOString()}`
const currentDate = new Date();
const info = currentDate.toLocaleString();
let id = 1;

exports.createNote=({title,description}) => {
    const note={id: id++,title,description,info}
    notes.push(note)
    return note;
    // return {id,title,description}
}

exports.getAllNotes = () => {
    return notes;
  };
exports.getByIdNote = (noteId) => {
    return notes.find(n=>n.id===noteId)
  };
exports.updateNote = (noteId,{title,description}) => {
    const note = notes.find(n=>n.id===noteId)
    if (!note) return null;
    // notes.title = title
    // notes.description = description
    if (title !== undefined && title !== null) note.title = title;
  if (description !== undefined && description !== null) note.description = description;
    return note
  };

exports.deleteNote=(noteId)=>{

    // notes = notes.filter(n => n.id !==noteId)
    // notes = notes.filter(n => n.id! == noteId);  //it give error
    const initialLength = notes.length;
    notes = notes.filter(n => n.id !== noteId);
    return notes.length < initialLength;
  };


exports.infoNote = (userId)=>{
  const note = notes.find(n=>n.id===noteId)
}







  