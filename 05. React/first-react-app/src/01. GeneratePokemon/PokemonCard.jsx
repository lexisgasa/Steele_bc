import "./PokemonCard.css"

export default function PokemonGenerator () {
    const pokeNumber = Math.floor(Math.random()*151) + 1;
    const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber}.png`;

    return (
        <div className="PokemonCard">
            <h1>Pokemon #{pokeNumber}</h1>
            <img src={pokeImg} alt=""/>
        </div>
    )
}