const express = require("express");
const app = express();
const path = require("path")

// set el view engine para usar ejs
app.set("view engine", "ejs");
// para poder inicializar sin error desde cualquier directorio
app.set("views", path.join(__dirname, "views"))


app.get("/",(req, res) => {
    // la respuesta renderizara la view llamada home.ejs
    const randomNumber = Math.floor( Math.random()*10 ) + 1
    res.render("home", { ranNum: randomNumber})
})


// crea server
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})