const btn1 = document.querySelector("footer button:nth-of-type(1)") // boton del player 1
const btn2 = document.querySelector("footer button:nth-of-type(2)") // boton del player 2
const btn3 = document.querySelector("footer button:nth-of-type(3)") // boton del rest

const title1 = document.querySelector("main h2 span:nth-of-type(1)") 
const title2 = document.querySelector("main h2 span:nth-of-type(2)")

const selectRounds = document.querySelector("#rounds") 

let winScore = 5;
let scoreP1 = 0;
let scoreP2 = 0;
let isGameOver = false;

btn1.addEventListener("click", () => {
    // si el game over es falso (y esta en falso en su declaracion), suma +1 al score del player 1 y cambialo en pantalla, si se da que el score coincide con el necesario para ganar, game over se vuelve true y ya no se cumple el if
    if ( !isGameOver ){
        scoreP1++;
        title1.innerText = scoreP1;
        if ( scoreP1 == winScore ){
            isGameOver = true;
        }
    }
})
// lo mismo para el 2do boton
btn2.addEventListener("click", () => {
    if ( !isGameOver ){
        scoreP2++;
        if ( scoreP2 == winScore ){
            isGameOver = true;
        }
        title2.innerText = scoreP2;
    }
})

let reset = () => {
    isGameOver = false;
    scoreP1 = 0
    scoreP2 = 0
    title1.innerText = 0;
    title2.innerText = 0;
}

btn3.addEventListener("click", reset)

selectRounds.addEventListener("change", () => {
    winScore = parseInt(selectRounds.value)
    reset();
}) 