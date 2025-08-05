import './App.css';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title title="Events" subtitle="All events well be here :)"/>
      <header className="App-header">
        <img src="./logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
