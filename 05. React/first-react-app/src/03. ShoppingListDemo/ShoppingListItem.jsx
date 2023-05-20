function ShoppingListItem({ name, quantity, completed }) {
  const styles = {
    color: completed ? "grey" : "red",
    textDecoration: completed ? "line-through" : null,
  };

  return (
    <div>
      <li style={styles}>
        {name} - {quantity}
      </li>
    </div>
  );
}

export default ShoppingListItem;

//     <li
//       key={item.key}
//       style={{
//         color: item.completed ? "grey" : "red",
//         textDecoration: item.completed ? "line-through" : null,
//       }}
//     >
//       {item.name} - {item.quantity}
//     </li>
