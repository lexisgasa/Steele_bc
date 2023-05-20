import "./App.css";
// import PokemonGenerator from './01. GeneratePokemon/PokemonCard'
// import {Greeter, Die} from "./02. Props/Greeter";
// import ListPicker from "./02. Props/ListPicker";
// import DoubleDice from "./02. Props/DoubleDice";
// import Heading from "./02. Props/Heading";
// import ColorList from "./02. Props/ColorList";
// import Slots from "./02. Props/Slots";
// import ShoppingList from "./03. ShoppingListDemo/ShoppingList";
import RentalPractice from "./03. ShoppingListDemo/RentalPractice";



// const data = [
//   { key: 1, name: "eggs", quantity: 6, completed: true },
//   { key: 2, name: "milk", quantity: 2, completed: false },
//   { key: 3, name: "cheese", quantity: 1, completed: true },
//   { key: 4, name: "chicken", quantity: 2, completed: false },
//   { key: 5, name: "spageti", quantity: 4, completed: false },
//   { key: 6, name: "ice cream", quantity: 8, completed: true },
// ]


const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

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
      <RentalPractice data={properties}/>
    </div>
  );
}

export default App;
