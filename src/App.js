import "./App.css";
import { PokemonList } from "./components/PokemonList";
import { PokemonDetails } from "./components/PokemonDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route
            path="/pokemon/:id"
            Component={(props) => <PokemonDetails name={props.name} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
