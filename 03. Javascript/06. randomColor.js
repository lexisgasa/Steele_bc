
// my approach
/*
const title = document.querySelector("h1")
const btn = document.querySelector("#btn");


const changeColor = () => { 
    const colorRed = Math.floor( Math.random() * 256 )
    const colorGreen = Math.floor( Math.random() * 256 )
    const colorBlue = Math.floor( Math.random() * 256 )
    document.body.style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
    title.innerText = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;

}


btn.addEventListener("click", changeColor)
*/


// colt

const button = document.querySelector("button")
button.addEventListener("click", () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
})


const randomColor = () => {
    const r = Math.floor( Math.random() * 256 );
    const g = Math.floor( Math.random() * 256 );
    const b = Math.floor( Math.random() * 256 );
    return `rgb( ${r}, ${g}, ${b} )`;
}