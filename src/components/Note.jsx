import React from 'react';
import '../public/css/note.css'

const Note  = (props)=>{
    return(
       <div className="note-wrapper">
           <h1 className="title">{props.title?props.title:'Title'}</h1>
           <p className="content">{props.content?props.content:'Content'}</p>
       </div>
    )
}

export default Note;