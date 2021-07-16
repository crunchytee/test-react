function loadNotes(notes) {

    //keyList so I know what keys to look for
    let keyList = [];
    let i, pushNote = [];

    //populate the keyList and update the i variable to be used in the while loop
    for (var key in localStorage) {
      keyList.push(key);

      //This is super hairy to use the - 6 thing. For some reason keyList includes the setter / getter objects. To be sorted out later
      i = keyList.length - 6;
    }

    while (i--) {
      //Get and store the values of the note by name
      const curNote = JSON.parse(localStorage.getItem(keyList[i]));
      const noteTitle = curNote.noteTitle;
      const noteDate = curNote.noteDate;
      const noteContent = curNote.noteContent;
      const noteId = curNote.noteId;
      const note1 = {
        "noteTitle": noteTitle,
        "noteDate": noteDate,
        "noteContent": noteContent,
        "noteId": noteId,
      }

      //Take the values and push them to the pushNote variable
      pushNote = {
        ...notes,
        noteId: {note1},
      };
    }
    
    return pushNote;
    
  }

export default loadNotes;
