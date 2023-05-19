import "./App.css";
// import PokemonGenerator from './01. GeneratePokemon/PokemonCard'
import {Greeter, Die} from "./02. Props/Greeter";

function App() {
  return (
    <div>
      {/* <PokemonGenerator/> */}
      <Greeter person="Alex" />
      <Die numSides={20} />
    </div>
  );
}

export default App;
