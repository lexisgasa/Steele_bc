import { useState } from "react";
import "./ColorExercise.css"

const randomChoice = (arr) => {
    const randomNumber = Math.floor(Math.random()*arr.length);
    return arr[randomNumber];
}

function ColorExercise ({colorPalette}){

    const [color, setColor] = useState(randomChoice(colorPalette))
    const colorGenerator = () => {
    const randomColor = randomChoice(colorPalette);
        setColor(randomColor)
    }
 

return (
    <div className="ColorBox" onMouseEnter={colorGenerator} style={{backgroundColor: color}}>
    </div>

)
}

export default ColorExercise;