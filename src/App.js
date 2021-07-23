import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import SimpleHeader from "./SimpleHeader";
import NewNote from "./NewNote";
import EditNote from "./EditNote";
import loadNotes from "./loadNotes";
import ReactModal from "react-modal";
import Note from "./Note";

const App = () => {
  //State used to store notes
  const [notes, setNotes] = useState({});
  
  //LoadNotes when they're ready using useEffect
  useEffect(() => {
    const notesToLoad = loadNotes(notes);
    setNotes(notesToLoad);
  }, []);
  // console.log(Object.keys(notes))

  //Return statement: includes SimpleHeader and Notes
  return (
    <div>
      <SimpleHeader
        title="Simple To-Do List"
        subtitle="Written by Tosh Roberts Brockway"
        lists={["Milky Way", "Log In"]}
      />
      {/* <button onClick={openModal}>Open Modal</button> */}

      {
        //Render NewNote && pass the notes state and setter function to NewNote
      }
      <NewNote className="newNote" notes={notes} setNotes={setNotes} />
      {/* {console.log("notes outside of NewNote" + JSON.stringify(notes))} */}

      {
        //Map over the notes and render each of them
        //This could use some work. I don't need to input about half of those props...
      }

      {Object.values(notes).map((note) => (
        <Note key={note.noteId}
          noteTitle={note.noteTitle}
          noteDate={note.noteDate}
          noteContent={note.noteContent}
          noteId={note.noteId}
          note={note}
          notes={notes}
          setNotes={setNotes}
        />
        )
      )}
    </div>
  );
};

render(<App />, document.getElementById("root"));
