import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import '../App.css'

import Card from './Card';
import contacts from '../contacts';
import notes from '../notes';


function App() {
  return (
    <div>
      <Header />
      {/* <Note title="Morning chore #1" content="Wake up!"/> */}
      <div className="big-title"><h1>My Contacts</h1></div>
    <div className="note-container">
      {notes.map((item)=>(
                  <Note
                    key = {item.key}
                    title = {item.title}
                    content = {item.content} />
        ))}
    </div>
      

      <div><Footer /></div>
    </div>
  );
}

export default App;
