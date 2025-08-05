import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('Habibullo')

  const handleClick = () => {
    setName('Doston')
  }
  
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;
