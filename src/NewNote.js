import React, { useState } from 'react';

// Simple Note component
// built 7/1/21

const NewNote = (props) => {
    return (
        <div className="note" id={props.noteId}>
            <form> 
                <label htmlFor="noteTitle">Note Title</label>
                <input type="text" id="noteTitle" name="noteTitle" required />

                <label htmlFor="noteDate">Note Date</label>
                <input type="date" id="noteDate" name="noteDate" required />

                <label htmlFor="noteContent">Note Content</label>
                <input type="text" id="noteContent" name="noteContent" required />
            </form>
        </div>
    )
}

export default NewNote;