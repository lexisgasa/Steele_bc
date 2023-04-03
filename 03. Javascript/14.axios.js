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