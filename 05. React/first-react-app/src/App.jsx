import "./App.css";
// import PokemonGenerator from './01. GeneratePokemon/PokemonCard'
// import {Greeter, Die} from "./02. Props/Greeter";
// import ListPicker from "./02. Props/ListPicker";
import DoubleDice from "./02. Props/DoubleDice";
import Heading from "./02. Props/Heading";

function App() {
  return (
    <div>
      {/* <PokemonGenerator/>
      <Greeter person="Alex" />
      <Greeter person="Colt" from="Blue" />
      <Die />
      <Die numSides={20} />
      <ListPicker values={[1,2,3,4,5,6,7,8,9]}/> */}
      <Heading color="rebeccapurple" text="New game" fontSize="3.5rem"/>
      <Heading text="Continue"/>
      <DoubleDice/>
      ====================
      <DoubleDice/>
      ====================
      <DoubleDice/>
      ====================
      <DoubleDice/>
    </div>
  );
}

export default App;
