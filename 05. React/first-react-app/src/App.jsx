import "./App.css";
// import PokemonGenerator from './01. GeneratePokemon/PokemonCard'
// import {Greeter, Die} from "./02. Props/Greeter";
// import ListPicker from "./02. Props/ListPicker";
// import DoubleDice from "./02. Props/DoubleDice";
// import Heading from "./02. Props/Heading";
// import ColorList from "./02. Props/ColorList";
// import Slots from "./02. Props/Slots";
// import ShoppingList from "./03. ShoppingListDemo/ShoppingList";
// import RentalPractice from "./03. ShoppingListDemo/RentalPractice";
// import Clicker from "./04. Events/Clicker";
// import EventPractice from "./04. Events/EventPractice";
// import Counter from "./05. State/Counter";
// import Toggler from "./05. State/Toggler";
// import ToggleCounter from "./05. State/ToggleCounter"
// import ColorExercise from "./05. State/ColorExercise";
// import ColorGrid from "./05. State/ColorGrid";
// import ObjectState from "./05. State/ObjectState"
// import EmojiClicker from "./05. State/EmojiClicker";
// import ScoreKeeper from "./05. State/ScoreKeeper";
// import Dice from "./06. Design/Dice";
import LuckyN from "./06. Design/LuckyN";





// ejercicio lista items
// const data = [
//   { key: 1, name: "eggs", quantity: 6, completed: true },
//   { key: 2, name: "milk", quantity: 2, completed: false },
//   { key: 3, name: "cheese", quantity: 1, completed: true },
//   { key: 4, name: "chicken", quantity: 2, completed: false },
//   { key: 5, name: "spageti", quantity: 4, completed: false },
//   { key: 6, name: "ice cream", quantity: 8, completed: true },
// ]

// ejercicio propiedades
// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

// ejercicio caja color
// const colorPalette = [
//   "#cdb4db",
//   "#be95c4",
//   "#9f86c0",
//   "#5e548e",
//   "#231942",
//   "#f72585",
//   "#7209b7",
//   "#3a0ca3",
//   "#4361ee",
//   "#4cc9f0",
//   "#560bad",
//   "#b5179e",
//   "#7209b7",
//   "#ffc6ff",
//   "#bdb2ff",
//   "#a0c4ff",
//   "#9bf6ff",
//   "#ffc8dd",
//   "#ffafcc",
//   "#bde0fe",
//   "#a2d2ff",
//   "#caf0f8",
//   "#90e0ef",
//   "#00b4d8",
//   "#0077b6",
//   "#03045e",
// ];

function App() {
  return (
    <div>
      {/* <PokemonGenerator/>
      <Greeter person="Alex" />
      <Greeter person="Colt" from="Blue" />
      <Die />
      <Die numSides={20} />
      <ListPicker values={[1,2,3,4,5,6,7,8,9]}/> */}
      {/* <Heading color="rebeccapurple" text="New game" fontSize="3.5rem"/>
      <Heading text="Continue"/> */}
      {/* <DoubleDice/>
      ====================
      <DoubleDice/>
      ==================== */}
      {/* <ColorList colors={["red", "blue","green","gold"]} /> */}
      {/* <Slots options={["🍒","🍌","🍇"]} /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <RentalPractice data={properties}/> */}
      {/*<Clicker />*/}
      {/*<EventPractice text="Do not click me" log="Why you clicked me?!" />*/}
      {/* <Counter />
      <Toggler />
      <ToggleCounter /> */}
      {/* <ColorGrid colorPalette={colorPalette} /> */}
      {/* <ObjectState/> */}
      {/* <EmojiClicker/> */}
      {/* <ScoreKeeper numPlayers={2} /> */}
      {/* <Dice dice={[3, 6, 1]} color="darkslateblue" />
      <Dice dice={[1, 2, 3]} />
      <Dice dice={[6, 9, 2]} color="rebeccapurple" /> */}
      <LuckyN numDice={4} goal={11}/>
    </div>
  );
}

export default App;
