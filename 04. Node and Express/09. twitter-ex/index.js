const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))


// userId, id = num, title, body

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((res) => res.json())
.then(data => console.log(data))
.catch(console.log("data wasn't found"))


app.get("/tweets", (req, res) => {
    res.render("home");
} )



app.listen(port, () => {
    console.log("NOW LISTENING ON PORT 3000")
});