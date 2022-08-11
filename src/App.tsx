import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
      <>
          <h1>Home</h1>
          <Link to={'/about'}>About</Link>
          <br/>
          <Link to={'/contact'}>Contact</Link>
          <br/>
          <Link to={'/parameter/Androkles'}>Params</Link>
      </>
  );
}

export default App;
