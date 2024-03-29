
import React from "react"
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar.js'

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <header className="App-header">
        <DetailForm />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/"
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
