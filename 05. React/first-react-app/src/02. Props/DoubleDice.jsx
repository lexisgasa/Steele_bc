// Ejemplo para condicionales en react


// guardando el resultado en una variable y devolver esa variable
// function DoubleDice(){
//     const num1 = Math.floor(Math.random()* 5) + 1;
//     const num2 = Math.floor(Math.random()* 5) + 1;
//     const result = num1 === num2 ? "You Win! :D" : "You Lose D:"
//     return (
//         <div>
//             <h2>{result}</h2>
//             <p>Number 1: {num1}</p>
//             <p>Number 2: {num2}</p>
//         </div>
//     )
// }



// utilizando directamente el ternario
// function DoubleDice(){
//     const num1 = Math.floor(Math.random()* 5) + 1;
//     const num2 = Math.floor(Math.random()* 5) + 1;
//     return (
//         <div>
//             <h2>{ num1 === num2 ? "You Win! :D" : "You Lose D:"}</h2>
//             <p>Number 1: {num1}</p>
//             <p>Number 2: {num2}</p>
//         </div>
//     )
// }


function DoubleDice(){
    const num1 = Math.floor(Math.random()* 5) + 1;
    const num2 = Math.floor(Math.random()* 5) + 1;
    return (
        <div style={{color: num1 === num2 ? "green" : "red"}} >
            <h2>Double dice goes!</h2>
            { num1 === num2 ? <h3>You Win! :D</h3> : null}
            <p>Number 1: {num1}</p>
            <p>Number 2: {num2}</p>
        </div>
    )
}

export default DoubleDice;