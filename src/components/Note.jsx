import React from 'react';
import '../public/css/note.css';

const Note  = (props)=>{

    return(
       <div className="note-wrapper">
           <h1 className="title">{props.title?props.title:'Title'}</h1>
           <div className="content"><p>{props.body?props.body:'Content'}</p></div>
           <div className="btn-wrapper">
            <button className="bnt-delete" onClick={()=>{props.onDelete(props.id)}}>delete</button>  
           </div>
       </div>
    )
}

export default Note;