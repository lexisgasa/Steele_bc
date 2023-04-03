// hacerlo todo en un mismo then

// fetch("https://swapi.dev/api/people/1")
// .then((res) => {
//     res.json()
//     .then((data) => {
//         console.log(data)
//     })
// })
// .catch((err)=> console.log(err))




// o encadenar el resultado de uno para hacer otra cosa
// se puede acortar quitando los {} y el return ya que es un arrow function, lo mantenemos en el primer then y quitamos en el 2do de ejemplo

// fetch("https://swapi.dev/api/people/1")
//     .then((res) => {
//     return res.json()
//     })
//     .then((data) => console.log(data))
//     .catch((err)=> console.log(err))


// aunque queda mas leible con una funcion async

const starWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1");  
        const data = await res.json();
        console.log(data)   
        const res2 = await fetch("https://swapi.dev/api/people/2");  
        const data2 = await res2.json();
        console.log(data2)   
    } catch (error) {
        console.log(error)
    }
}

starWarsPeople();