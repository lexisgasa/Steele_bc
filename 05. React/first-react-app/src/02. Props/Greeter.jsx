
// la forma simple
// function Greeter(props) {
//     return <h1> Hello {props.person} - from {props.from} </h1>
// }


// la forma destructurada + propiedad por defecto no indicada en el hijo
function Greeter({person, from = "someone"}) {
    return <h1> Hello {person} - from {from} </h1>
}

// pasar numeros en las propiedades + propiedad por defecto aunque indicada en el hijo
function Die({numSides = 6}){
    const roll = Math.floor(Math.random()*numSides)+1;
    return <h2>Die roll: {roll}</h2>
}

// al pasar de sta forma se desestructura y se ha de escribir exactamente igual como sel lama la funcion
export {Greeter, Die};