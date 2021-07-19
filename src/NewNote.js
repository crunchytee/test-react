import React, { useState } from "react";
import idGenerator from "./idGenerator";

// Simple NewNote component
// built 7/1/21

const NewNote = (props) => {

  //function to clear notes for dev purposes
  const clearNotes = () => {
    window.localStorage.clear();
    props.setNotes({});
  }

  //Take the form values and set them using the setNotes state setter
  const onSubmit = (e) => {
    //Use preventDefault to stop event from replacing the notes that are already there?
    e.preventDefault();

    //Get and store the values of the form by name
    const noteTitle = e.target.noteTitle.value;
    const noteDate = e.target.noteDate.value;
    const noteContent = e.target.noteContent.value;
    const noteId = idGenerator();
    const curNote = {
      "noteTitle": noteTitle,
      "noteDate": noteDate,
      "noteContent": noteContent,
      "noteId": noteId
    }

    //Take the values and turn them into another variable
    //that contains the existing notes & the new note submitted
    const newNotes = {
      ...props.notes,
      [noteId]: curNote,
    };

    //sort keys 
    const ordered = Object.keys(newNotes).sort().reverse().reduce(
      (obj, key) => { 
        obj[key] = newNotes[key]; 
        return obj;
      }, 
      {}
    );
    

    //use the notes setter to update the notes
    props.setNotes(ordered);
    

    //For each note, check to see if it exists in localStorage. If not, then add it to localStorage
    //Does this even need to happen? I guess it might when I go to update a note? But really we do want to update it
    for (let i = 0; i < Object.keys(newNotes).length; i++) {
      localStorage.setItem(
        newNotes[noteId].noteId,
        JSON.stringify({
          noteTitle: newNotes[noteId].noteTitle,
          noteDate: newNotes[noteId].noteDate,
          noteContent: newNotes[noteId].noteContent,
          noteId: newNotes[noteId].noteId
        })
      );
    };
  };

  

  // const [noteTitle, setNoteTitle] = useState();

  //Render NewNote form
  return (
    <div className="newNote" onSubmit={onSubmit}>
      <form>
        <label htmlFor="noteTitle">Note Title</label>
        <input
          type="text"
          id="noteTitle"
          name="noteTitle"
          value={props.noteTitle}
          required
        />

        <label htmlFor="noteDate">Note Date</label>
        <input
          type="date"
          id="noteDate"
          name="noteDate"
          value={props.noteDate}
          required
        />

        <label htmlFor="noteContent">Note Content</label>
        <input
          type="text"
          id="noteContent"
          name="noteContent"
          value={props.noteContent}
          required
        />

        <button type="submit">Submit Note</button>
        <button type="button" onClick={clearNotes}>Clear Notes</button>
      </form>
      
    </div>
  );
};

export default NewNote;
