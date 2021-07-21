import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import SimpleHeader from "./SimpleHeader";
import NewNote from "./NewNote";
import EditNote from "./EditNote";
import loadNotes from "./loadNotes";
import ReactModal from "react-modal";

const App = () => {
  //State used to store notes
  const [notes, setNotes] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  //modal jazz, for testing
  const openModal  = (e) => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

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
      }

      {Object.values(notes).map((note, i) => (
        <div key={i}>
          <EditNote isOpen={isOpen} setNotes={setNotes} setIsOpen={setIsOpen} ariaHideApp={false} onRequestClose={closeModal} note={note} notes={notes} noteId={note.noteId} closeModal={closeModal}/>
          <div className="note" onClick={openModal}>
            <h1 className="noteTitle">{note.noteTitle}</h1>
            <h3 className="noteDate">{note.noteDate}</h3>
            <div className="noteContent">{note.noteContent}</div>
            <div className="noteContent">{note.noteId}</div>
          </div>
        </div>
        )
      )}
    </div>
  );
};

render(<App />, document.getElementById("root"));
