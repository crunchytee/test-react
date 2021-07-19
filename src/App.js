import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import SimpleHeader from "./SimpleHeader";
import NewNote from "./NewNote";
import editNote from "./EditNote";
import loadNotes from "./loadNotes";

const App = () => {
  //State used to store notes
  const [notes, setNotes] = useState({});

  //LoadNotes when they're ready using useEffect
  useEffect(() => {
    const notesToLoad = loadNotes(notes);
    setNotes(notesToLoad);
  }, []);
  console.log(Object.keys(notes))

  //Return statement: includes SimpleHeader and Notes
  return (
    <div>
      <SimpleHeader
        title="Simple To-Do List"
        subtitle="Written by Tosh Roberts Brockway"
        lists={["Milky Way", "ASTROtoken", "Mily Way Marketplace", "Log In"]}
      />

      {
        //Render NewNote && pass the notes state and setter function to NewNote
      }
      <NewNote className="newNote" notes={notes} setNotes={setNotes} />
      {console.log("notes outside of NewNote" + JSON.stringify(notes))}

      {
        //Map over the notes and render each of them
      }

      {/* {Object.keys(notes).map((note, i) => (
        <div className="note" key={i}>
          <h1 className="noteTitle">{note.noteTitle}</h1>
          <h3 className="noteDate">{note.noteDate}</h3>
          <div className="noteContent">{note.noteContent}</div>
          <div className="noteContent">{note.noteId}</div>
        </div>
        )
      )}  */}
      
      {Object.keys(notes).map((note, i) => (
        <div className="note" key={i}>
          <h1 className="noteTitle">{note.noteTitle}</h1>
          <h3 className="noteDate">{note.noteDate}</h3>
          <div className="noteContent">{note.noteContent}</div>
          <div className="noteContent">{note.noteId}</div>
        </div>
        )
      )} 
    </div>
  );
};

render(<App />, document.getElementById("root"));
