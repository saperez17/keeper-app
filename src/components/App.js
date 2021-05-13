import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import InputNote from './InputNote';
import '../App.css'

import Card from './Card';
import contacts from '../contacts';
import notes from '../notes';


function App() {
const [notes, setNotes] = useState([]);

const handleAddNote = (note)=>{
  setNotes(prevState => [...prevState, note])
}

const handleDeleteNote = (noteIndex)=>{
  setNotes(notes.filter((note, idx)=>idx!=noteIndex))
}

  return (
    <div>
      <Header />
      {/* <Note title="Morning chore #1" content="Wake up!"/> */}
      <div className="big-title"><InputNote onAdd={handleAddNote}/></div>
    <div className="note-container">
    {notes.map((note, idx)=><Note key={idx} id={idx} title={note.title} body={note.body} onDelete={handleDeleteNote}/>)}
    </div>
      

      <div><Footer /></div>
    </div>
  );
}

export default App;
