//NOT IN USE CURRENTLY 7/7/21

function loadNotes(notes, setNotes) {
  var keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    //Get and store the values of the note by name
    const note = localStorage.getItem(keys[i]);
    const noteTitle = note.noteTitle;
    const noteDate = note.noteDate;
    const noteContent = note.noteContent;
    const noteId = note.noteId;

    //Take the values and turn them into another variable
    //that contains the existing notes & the new note submitted
    const newNotes = [...notes, { noteTitle, noteDate, noteContent, noteId }];

    //use the notes setter to update the notes
    setNotes(newNotes);
  }
}

export default loadNotes;
