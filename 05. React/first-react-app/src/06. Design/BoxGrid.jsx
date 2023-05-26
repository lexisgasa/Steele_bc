import Box from "./Box";
import { useState } from "react";
import "./BoxGrid.css";

function BoxGrid({ numBoxes = 9 }) {
  const [boxes, setBoxes] = useState(Array(numBoxes).fill(false));
  const reset = () => {
    setBoxes(Array(numBoxes).fill(false));
  };
  const toggleBox = (index) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((value, i) => {
        return i === index ? !value : value;
      });
    });
  };
  return (
    <div className="BoxGrid">
      {boxes.map((box, index) => (
        <Box key={index} isActive={box} toggle={() => toggleBox(index)} />
      ))}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default BoxGrid;
