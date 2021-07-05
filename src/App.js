import React, { useState } from "react";
import { render } from "react-dom";
import SimpleHeader from "./SimpleHeader";
import NewNote from "./NewNote";
import editNote from "./EditNote";

const App = () => {

  //State used to store notes
  const [notes, setNotes] = useState([]);

  //Return statement: includes SimpleHeader and Notes
  return (
    <div>
      <SimpleHeader title="Simple To-Do List" 
                    subtitle="Written by Tosh Roberts Brockway" 
                    lists={["first","second","adsas","sadasd","ggg","hhh",]}/>
      
      {
        //Render NewNote && pass the notes state and setter function to NewNote
      }
      <NewNote className="newNote" notes={notes} setNotes={setNotes} />
    
      {
        //Map over the notes and render each of them
      }
      {
        notes.map((note, i) => (
          <div className="note" key={i} onClick={editNote(note)}>
            <h1 className="noteTitle">{note.noteTitle}</h1>
            <h3 className="noteDate">{note.noteDate}</h3>
            <div className="noteContent">{note.noteContent}</div>
          </div>  
        ))
      }
    </div>
  )

}
  
render(<App />, document.getElementById("root"));