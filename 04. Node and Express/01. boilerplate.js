const fs = require ("fs");
// los args [0] y [1] son la ruta desde donde se ejecuta el comando, por lo tango el arg [2] será la carpeta que se crea nueva
const folderName = process.argv[2] || "Project";

try {
    fs.mkdirSync(folderName);
    // el empty string se necesita con la version de node, ya que espera un segundo argumento
    fs.writeFileSync(`${folderName}/index.html`,"")
    fs.writeFileSync(`${folderName}/styles.css`,"")
    fs.writeFileSync(`${folderName}/app.js`, "")
} catch (err) { 
    console.log(err)
}

//  escribe en terminal node 01.\ boilerplate.js para crear una carpeta con el nombre default Project, que a su vez tenga esos 3 archivos