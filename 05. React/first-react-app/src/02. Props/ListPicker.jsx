// ejemplo que enseña arrays / objetos como propiedades

export default function ListPicker({values}){
    const randomIndex = Math.floor(Math.random()* values.length);
    const randElement = values[randomIndex];
    return(
        <div>
            <p>The list of values: {values}</p>
            <p>Random element is {randElement} </p>
        </div>
    )
}