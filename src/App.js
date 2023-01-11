import logo from "./logo.svg";
import "./App.css";
import WindowWidth from "./live";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WindowWidth />
      </header>
    </div>
  );
}

export default App;
