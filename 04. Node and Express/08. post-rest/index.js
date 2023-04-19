const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");


app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))



const comments = [
    {
        id: uuid(),
        username : "Todd",
        comment: "lol so funny"
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: "I like to go birdwatching with my dog"
    },
    {
        id: uuid(),
        username: "Sk8erBoi",
        comment: "Plz delete ur accoun, Todd"
    },
    {
        id: uuid(),
        username: "onlysayswoof",
        comment: "woof woof woof"
    }
]
// esta sera la pagina principal, en la ruta /comments se renderiza la view "index" qe esta en la carpeta comments
app.get("/comments", (req, res) => {
    res.render("comments/index" , {comments})
})

// de los siguientes dos, el primero es una pagina que solo renderiza una form que tiene de metodo post y por lo tanto crea algo, obtiene un input username y otro input comment con los valores añadidos por el user
// cuando la form se envia, envia la data a la ruta comments y como el metodo es post, el post coge esa data y desestructura el objeto que se acaba de crear con las key username y comment, luego se pushea al array  para que entre en el ciclo - redirect es necesario
app.get("/comments/new", (req, res) => {
    res.render("comments/new");
})
app.post("/comments", (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuid()})
    res.redirect("/comments")
})

app.get("/comments/:id", (req,res) => {
    const {id} = req.params;
    const comment = comments.find( c => c.id === id);
    res.render("comments/detail", {comment})
})






// random practice
app.get("/tacos", (req, res) => {
    const {meat, qty} = req.query
    console.log(meat, qty)
    res.send("GET /tacos response")
})

app.post("/tacos", (req,res) => {
    const { meat, qty } = req.body
    console.log(meat, qty)
    res.send("POST /tacos response")
})



app.listen(3000, () => {
    console.log("NOW LISTENING ON PORT 3000")
})