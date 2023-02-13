import logo from "./logo.svg";
import "./App.css";
import Items from "./components/Items";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>STALCRAFT DATABASE</h1>
        <p>Find all items and information here.</p>
      </header>
      <div className="App-body">
        <Items></Items>
      </div>
    </div>
  );
}

export default App;
