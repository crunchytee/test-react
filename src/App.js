import React, { useState } from "react";
import { render } from "react-dom";
import SimpleHeader from "./SimpleHeader";
import NewNote from "./NewNote";

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
      <NewNote notes={notes} setNotes={setNotes} />
    
      {
        //Map over the notes and render each of them
      }
      {
        notes.map((note, i) => (
          <div key={i}>
            <div>{note.noteTitle}</div>
            <div>{note.noteDate}</div>
            <div>{note.noteContent}</div>
          </div>  
        ))
      }
    </div>
  )

}
  
render(<App />, document.getElementById("root"));