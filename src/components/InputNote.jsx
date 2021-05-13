import React, { useState } from 'react';
import '../public/css/InputNote.css'


const InputNote = (props) => {
    const [note, setNote] = useState({title:"", body:""})

    const onChangeInput = (event)=>{
        setNote((prevState)=>{
            return(
                {   ...prevState,
                    [event.target.name]:event.target.value
                }
            )
        })
    }

    const addNote = ()=>{
        props.onAdd(note);
        setNote({title:"", body:""}); 
    }

    return (
    <div className="input-note-wrapper">
        <input 
        placeholder="Title"
        name="title"
        onChange={onChangeInput}
        value={note.title}/>
        <input 
        placeholder="Take a note"
        name="body"
        onChange={onChangeInput}
        value={note.body}/>
        <button onClick={addNote}>Add</button>
    </div>
    );
};


export default InputNote;