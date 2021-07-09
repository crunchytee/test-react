import React, { useState } from "react";
import idGenerator from "./idGenerator";

// Simple NewNote component
// built 7/1/21

const NewNote = (props) => {

  //function to clear notes for dev purposes
  const clearNotes = () => {
    window.localStorage.clear();
    props.setNotes([]);
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

    //Take the values and turn them into another variable
    //that contains the existing notes & the new note submitted
    const newNotes = [
      ...props.notes,
      { noteTitle, noteDate, noteContent, noteId },
    ];

    //use the notes setter to update the notes
    props.setNotes(newNotes);

    //For each note, check to see if it exists in localStorage. If not, then add it to localStorage
    //Does this even need to happen? I guess it might when I go to update a note? But really we do want to update it
    for (let i = 0; i < newNotes.length; i++) {
      if (localStorage.getItem(newNotes[i].noteId) == newNotes[i].noteId) {
        console.log(
          `Item ${newNotes[i].noteId} not stored, already exists in localStorage`
        );
      } else {
        // set key / value pairs into localStorage using noteID.property : noteProperty syntax

        localStorage.setItem(
          newNotes[i].noteId,
          JSON.stringify({
            noteTitle: newNotes[i].noteTitle,
            noteDate: newNotes[i].noteDate,
            noteContent: newNotes[i].noteContent,
            noteId: newNotes[i].noteId
          })
        );
      };
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
      </form>
      <button type="button" onClick={clearNotes}>Clear Notes</button>
    </div>
  );
};

export default NewNote;
