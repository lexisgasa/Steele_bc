const express = require("express");
const app = express();
const port = 3000;

// mejor comentado porque el use se activa con cada http request y por tanto cada vez que se actualiza la pagina o se mueve a otra ruta
// app.use((req, res) => {
//     console.log("new request!")
//     res.send("We got your request!")
// })


// ruta de la home page
app.get("/",(req, res) => {
    console.log("Opened localhost and now you are in the main page!")
    res.send("<H1>Home page!</H1>")
})
// ruta estatica que lleva a una pagina con el h1 de miau
app.get("/cats",(req, res) => {
    console.log("new request cats!")
    res.send("<H1>MEAOWWW!</H1>")
})
// usando una ruta dinamica lo que se escriba en esa ruta es lo que aparecera
app.get("/:random", (req, res) => {
    const { random } = req.params;
    res.send(`this is the ${random}`)
})
// usando los query, una vez se entra en /search y se pone algo despues del =, esa sera la q
app.get("/search",(req, res)=> {
    console.dir(req.query)
    const q = req.query.q
    res.send(`<h1>Here are the search results for the word: ${q}</h1>`)
});
// se aplica a todo, por lo tanto mejor en la ultima linea por si no hay match con una linea anterior, si se pusiera al principio haria match con todo y saltaria siempre
app.get("*",(req, res) => {
    console.log("inexisten path")
    res.send("<H1>Unknown route</H1>")
})


// crear el server
app.listen(port, () =>{
    console.log( `Listening on port ${port}` )
})