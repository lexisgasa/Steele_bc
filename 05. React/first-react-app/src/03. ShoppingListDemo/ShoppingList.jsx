import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <div>
      <h1>To buy list</h1>
      <ul>
        {items.map((item) => (
            <ShoppingListItem key={item.key} name={item.name} quantity={item.quantity} completed={item.completed} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
