import "./App.css";
import { Filter } from "./components/Filter/Filter";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Filter />
    </div>
  );
}

export default App;
