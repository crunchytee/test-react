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
  const openModal  = (props) => {
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
        lists={["Milky Way", "ASTROtoken", "Mily Way Marketplace", "Log In"]}
      />
      {/* <button onClick={openModal}>Open Modal</button> */}

      {
        //Render NewNote && pass the notes state and setter function to NewNote
      }
      <NewNote className="newNote" notes={notes} setNotes={setNotes} />
      {/* {console.log("notes outside of NewNote" + JSON.stringify(notes))} */}

      {
        //EditNote Component, takes the clicked on note and opens a Modal to edit the information of the Note
      }

      <EditNote isOpen={isOpen} setIsOpen={setIsOpen} ariaHideApp={false} onRequestClose={closeModal} notes={notes} />

      {
        //Map over the notes and render each of them
      }
      
      {Object.keys(notes).map((note, i) => (
        <div className="note" key={i} onClick={openModal}>
          <h1 className="noteTitle">{notes[note].noteTitle}</h1>
          <h3 className="noteDate">{notes[note].noteDate}</h3>
          <div className="noteContent">{notes[note].noteContent}</div>
          <div className="noteContent">{notes[note].noteId}</div>
        </div>
        )
      )} 
    </div>
  );
};

render(<App />, document.getElementById("root"));
