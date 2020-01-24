import React from 'react';
import './App.css';
import LikeButton from './like-button';
import LoveButton from './love-button'

function App() {
  return (
    <div className="App">
      <div className="button">
      <LikeButton />
      <LoveButton />
      </div>
    </div>
  );
}

export default App;
