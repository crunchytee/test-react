import React, { useState } from "react";
import NewNote from "./NewNote";
import ReactModal from 'react-modal';

const EditNote = (props) => {
  const initialNoteTitle = props.noteTitle;
  const noteDate = props.noteDate;
  const noteContent = props.noteContent;
  const noteID = props.noteID;

  //TODO: use modal
  //modal jazz, for testing
  const openModal  = () => {
    props.setIsOpen(true);
  }

  const closeModal = () => {
    props.setIsOpen(false);
  }

  return (
    <div>
      <ReactModal isOpen={props.isOpen} setIsOpen={props.setIsOpen} ariaHideApp={false} onRequestClose={closeModal}>
        {/* <div className="newNote">
          <form>
            <label htmlFor="noteTitle">Note Title</label>
            <input
              type="text"
              id="noteTitle"
              name="noteTitle"
              value={initialNoteTitle}
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
        </div> */}
      </ReactModal>
    </div>
  );
}
export default EditNote;
