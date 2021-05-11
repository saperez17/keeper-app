import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import '../App.css'

import Card from './Card';
import contacts from '../contacts';


function App() {
  return (
    <div>
      <Header />
      {/* <Note title="Morning chore #1" content="Wake up!"/> */}
      {contacts.map((item, idx)=>(
          <Card
          key={idx}
          name={item.name}
          imageURL={item.imageURL}
          phone={item.phone}
          email={item.email}/>
      ))}
      <div><Footer /></div>
    </div>
  );
}

export default App;
