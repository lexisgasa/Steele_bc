import ColorExercise from "./ColorExercise";
import "./ColorGrid.css"

function ColorGrid({colorPalette}) {

    const boxes = [];
    for( let i = 0; i<25; i++){
        boxes.push(<ColorExercise key={i} colorPalette={colorPalette} />)
    }

    return (
        <div className="ColorGrid">
            {boxes}
        </div>
    )
}

export default ColorGrid;