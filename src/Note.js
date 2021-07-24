import React, {useState} from "react";
import DeleteNote from "./DeleteNote";
import EditNote from "./EditNote";

const Note = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    //modal jazz
    const openModal  = (e) => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div key={props.i}>
          <div className="note" >
            <div onClick={openModal}>
            <h1 className="noteTitle">{props.noteTitle}</h1>
            <h3 className="noteDate">{props.noteDate}</h3>
            <div className="noteContent">{props.noteContent}</div>
            <div className="noteContent">{props.noteId}</div>
            </div>
            <DeleteNote
              note={props.note}
              setNotes={props.setNotes}
              notes={props.notes}
            />
          </div>
          <EditNote 
            isOpen={isOpen} 
            setNotes={props.setNotes} 
            setIsOpen={setIsOpen}
            onRequestClose={closeModal} 
            note={props.note} 
            notes={props.notes} 
            closeModal={closeModal}
            setNotes={props.setNotes}
          />
        </div>
    );
};

export default Note;