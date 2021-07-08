import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import SimpleHeader from "./SimpleHeader";
import NewNote from "./NewNote";
import editNote from "./EditNote";
// import loadNotes from "./loadNotes";

const App = () => {
  //State used to store notes
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  function loadNotes() {
    let keyList = [];

    for (var key in localStorage) {
      keyList.push(key);
    }

    let i = keyList.length - 6;
    console.log(keyList);
    console.log(i);

    for (var j = 0; j > i.length; j++ ) {
      //Get and store the values of the note by name
      const note = localStorage.getItem(keyList[i]);
      const noteTitle = note.noteTitle;
      const noteDate = note.noteDate;
      const noteContent = note.noteContent;
      const noteId = note.noteId;

      //Take the values and turn them into another variable
      //that contains the existing notes & the new note submitted
      // notes.push({ noteTitle, noteDate, noteContent, noteId });
      const pushNote = [...notes, { noteTitle, noteDate, noteContent, noteId }];

      //use the notes setter to update the notes
      setNotes(pushNote);
      i--;
    }
  }

  //Return statement: includes SimpleHeader and Notes
  return (
    <div>
      <SimpleHeader
        title="Simple To-Do List"
        subtitle="Written by Tosh Roberts Brockway"
        lists={["first", "second", "adsas", "sadasd", "ggg", "hhh"]}
      />

      {
        //Render NewNote && pass the notes state and setter function to NewNote
      }
      <NewNote className="newNote" notes={notes} setNotes={setNotes} />

      {
        //Map over the notes and render each of them
      }
      {notes.map((note, i) => (
        <div className="note" key={i}>
          <h1 className="noteTitle">{note.noteTitle}</h1>
          <h3 className="noteDate">{note.noteDate}</h3>
          <div className="noteContent">{note.noteContent}</div>
          <div className="noteContent">{note.noteId}</div>
        </div>
      ))}
    </div>
  );
};

render(<App />, document.getElementById("root"));
