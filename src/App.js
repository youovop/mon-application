import React from 'react';
import './App.css';
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p> This is really working </p>
      <Person name="Max" age="28" />
      <Person name="Manu" age="25">My hobbies: Racing</Person>
      <Person name="Stephanie" age="29" />
   </div>

 );
}

export default App;
