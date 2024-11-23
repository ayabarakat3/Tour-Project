import { useState } from 'react'
import Gallery from `./Gallery`
import './App.css'

function App() {
    return (
      <div className="App">
        <h1>Tour Comparison App</h1>
        <h2>It's tour time!</h2>
        <Gallery />
      </div>
    );
  }
  
  export default App;