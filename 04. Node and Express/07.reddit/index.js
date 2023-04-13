const express = require("express");
const app = express();
const path = require("path");
// al usar require ya se parsea automaticamente
const redditData = require("./data.json")


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

// busca  por la carpeta public cuando cojamos css y js
app.use(express.static(path.join(__dirname, "public")));

// string dinamica = todo lo que se escriba en el navegador se genera como objeto en params de la request
// la respuesta a enviar es el render de la pagina home
app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    // redditData tiene keys con nombres que si hay match, estaran dentro de los claudator []
    const data = redditData[subreddit];
    //  se usa el spread operator para tener cada valor por individual
    if (redditData[subreddit]) {
    res.render("home", {...data})
    } else {
        res.send(`<h1>Subreddit "${subreddit}" not found</h1>`)
    }
})

app.get("/", (req, res)=> {
    console.log("Main page!")
    res.send("<h1>Now in the main page</h1>")
})

app.listen(3000, () => {
    console.log("NOW LISTENING ON PORT 3000")
})