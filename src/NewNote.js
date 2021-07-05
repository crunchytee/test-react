import React, { useState } from 'react';

// Simple Note component
// built 7/1/21

const NewNote = (props) => {
    //Take the form values and set them using the setNotes state setter
    const onSubmit = (e) => {
        //Use preventDefault to stop event from replacing the notes that are already there?
        e.preventDefault();

        //Get and store the values of the form by name
        const noteTitle = e.target.noteTitle.value;
        const noteDate = e.target.noteDate.value;
        const noteContent = e.target.noteContent.value;

        //Take the values and turn them into another variable 
        //that contains the existing notes & the new note submitted 
        const newNotes = [...props.notes, {noteTitle, noteDate, noteContent}];

        //use the notes setter to update the notes
        props.setNotes(newNotes);
    };
    
    
    
    //Render NewNote form
    return (
        <div className="note" onSubmit={onSubmit}>
            <form> 
                <label htmlFor="noteTitle">Note Title</label>
                <input type="text" id="noteTitle" name="noteTitle" required />

                <label htmlFor="noteDate">Note Date</label>
                <input type="date" id="noteDate" name="noteDate" required />

                <label htmlFor="noteContent">Note Content</label>
                <input type="text" id="noteContent" name="noteContent" required />

                <button type="submit">Submit Note</button>
            </form>
        </div>
    );
};

export default NewNote;