const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))


// string dinamica = todo lo que se escriba en el navegador se genera como objeto en params de la request
// la respuesta a enviar es el render de la pagina home
app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render("home", {subreddit: subreddit})
})

app.listen(3000, () => {
    console.log("NOW LISTENING ON PORT 3000")
})