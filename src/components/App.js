import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

function App() {
  return (
    <div>
      <Header />
      <Note title="Morning chore #1" content="Wake up!"/>
      <Footer />
    </div>
  );
}

export default App;
