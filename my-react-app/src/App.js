import logo from "./logo.svg";
import "./App.css";
// import Car from "./Car";
import Xe from "./Xe";

function App() {
  const html = (
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
        <Xe color="red" value="Toi la xe mau do" />
        <Xe color="blue" value="Toi la xe mau xanh" />
        <Xe color="orange" value="Toi la xe mau cam" />
      </header>
    </div>
  );
  return html;
}

export default App;
