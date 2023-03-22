// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


const container = document.createElement("div")
document.body.appendChild(container)
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for ( let i = 1; i <= 151; i++ ) {
    const pokemon = document.createElement("div")
    pokemon.classList.add("pokemon")
    const newImg = document.createElement("img")
    newImg.src = `${baseURL}${[i]}.png`
    pokemon.appendChild(newImg)
    const pokeID = document.createElement("span")
    pokeID.innerText = `#${i}`
    pokemon.appendChild(pokeID)
    container.appendChild(pokemon)
}











// mi metodo
// const container = document.createElement("div")
// for (let i = 1; i <= 151; i++) {
//     const newImg = document.createElement("img");
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[i]}.png`;
//     container.appendChild(newImg)
// }

// document.body.appendChild(container)

















