function ColorList({colors}){
 
    return (
        <div>
            <h1>List of colors:</h1>
            <ul>
                {colors.map(c => 
                    <li style={{color: c}}>{c}</li>)}
            </ul>
        </div>
    )
}

export default ColorList;