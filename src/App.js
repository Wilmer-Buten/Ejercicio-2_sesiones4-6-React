import logo from './logo.svg';
import './App.css';
import Clock_class from './components/Clock_class'
import ClockComponent from './components/ClockComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <ClockComponent></ClockComponent>
      </header>
    </div>
  );
}

export default App;
