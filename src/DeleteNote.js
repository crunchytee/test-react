import React, {useState} from "react";
import ReactModal from "react-modal";

const DeleteNote = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    //modal jazz
    const openModal  = (e) => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    console.log("object = " + JSON.stringify(props.note));
    const delNote = () => {
        // delete props.note;
        let notes = props.notes;
        delete notes[props.note.noteId];
        props.setNotes(notes);
        closeModal();
    };

    return (
        <div key={props.note.noteId}>
            <button onClick={openModal}>Delete Note</button>
            <ReactModal key={props.note.noteId} isOpen={isOpen} setIsOpen={setIsOpen} ariaHideApp={false} onRequestClose={closeModal}>
                <>
                    <h1>Are you sure you want to delete this note?</h1>
                    <button onClick={delNote}>HELL YES</button>
                    <button onClick={closeModal}>OMG no and thanks for asking!</button>

                </>
            </ReactModal>
        </div>
    );
};

export default DeleteNote;