import React, { useState } from "react";
import NewNote from "./NewNote";

function editNote(props) {
  const initialNoteTitle = props.noteTitle;
  const noteDate = props.noteDate;
  const noteContent = props.noteContent;
  const noteID = props.noteID;

  //TODO: use modal

  return (
    <div className="newNote" onSubmit={updateNote}>
      <form>
        <label htmlFor="noteTitle">Note Title</label>
        <input
          type="text"
          id="noteTitle"
          name="noteTitle"
          value={noteTitle}
          defaultValue={initialNoteTitle}
          required
          onChange={(e) => setNoteTitle(e.target.value)}
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
    </div>
  );
}
export default editNote;
