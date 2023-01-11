import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import LiveWidth from "./LiveWidth";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < LiveWidth />
      </header>
    </div>
  );
}

export default App;
