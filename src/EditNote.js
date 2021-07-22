import React, { useState } from "react";
import NewNote from "./NewNote";
import ReactModal from 'react-modal';

const EditNote = (props) => {

  //Task: use destructuring to get all the values
  const initialNoteTitle = props.note.noteTitle;
  const noteDate = props.note.noteDate;
  const noteContent = props.note.noteContent;
  const noteId = props.note.noteId;
  console.log("modal noteId is " + noteId)

  const onSubmit = (e) => {
    //Use preventDefault to stop event from replacing the notes that are already there?
    e.preventDefault();

    props.closeModal;

    //Get and store the values of the form by name
    const newNoteTitle = e.target.noteTitle.value;
    const newNoteDate = e.target.noteDate.value;
    const newNoteContent = e.target.noteContent.value;
    const newNoteId = noteId;
    const curNote = {
      "noteTitle": newNoteTitle,
      "noteDate": newNoteDate,
      "noteContent": newNoteContent,
      "noteId": newNoteId
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

  return (
    <div key={props.note.noteId}>
      <ReactModal key={props.note.noteId} isOpen={props.isOpen} setIsOpen={props.setIsOpen} ariaHideApp={false} onRequestClose={props.closeModal}>
        <div className="newNote" onSubmit={onSubmit}>
          <form>
            <label htmlFor="noteTitle">Note Title</label>
            <input
              type="text"
              id="noteTitle"
              name="noteTitle"
              defaultValue={initialNoteTitle}
              required
            />

            <label htmlFor="noteDate">Note Date</label>
            <input
              type="date"
              id="noteDate"
              name="noteDate"
              defaultValue={noteDate}
              required
            />

            <label htmlFor="noteContent">Note Content</label>
            <input
              type="text"
              id="noteContent"
              name="noteContent"
              defaultValue={noteContent}
              required
            />

            <button type="submit">Submit Note</button>
          </form>
        </div>
      </ReactModal>
    </div>
  );
}
export default EditNote;
