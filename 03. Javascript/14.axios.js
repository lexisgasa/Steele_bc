// axios devuelve promesa por lo tanto se puede usar el then y el catch

// axios.get("https://swapi.dev/api/")
// .then((res)=>{
//     console.log(res)
// })
// .catch ( (err) => console.log(err) )





// o hacerlo una funcion asincrona

const starWarsApi = async () => {
    try {
    const res = await axios.get("https://swapi.dev/api/");
    console.log(res.data);
    } catch (err) {
    console.log(err)
    }
};
starWarsApi()



// primero se crea la funcion que hace el fetch de la pagina y DEVUELVE un valor
const getDadJoke = async () => {
    try {
        const headers = { headers: { Accept: "application/json"}};
        const res = await axios.get("https://icanhazdadjoke.com/", headers);
        console.log(res.data.joke);
        return res.data.joke;
    } catch (error) {
        const title = document.querySelector("h1");
        title.innerText = "API failed"
        return "No jokes available!"
        console.log(error)
    }
}
// getDadJoke();


const addNewJoke = async () => {
    try {
        // sin el await, imprime object promise, y luego en consola el resultado, por eso con await coge el resultado y luego hace el elemento li
        // IMPORTANTE GUARDAR EL VALOR OBTENIDO AL LLAMAR LA FUNCION PARA PODER USARLO
        const jokeText = await getDadJoke();
        // crear un li nuevo
        const element = document.createElement("li");
        // que se le añade el contenido obtenido de llamar la funcion
        element.append(jokeText)
        // y se le añade al elemento ul
        list.append(element)
    } catch (e) {
        console.log(e)
    }
}

const btn = document.querySelector("button")
const list = document.querySelector("ul")
// no usar funcion() o se llamara en cuanto se recarga la pagina
btn.addEventListener("click", addNewJoke);
