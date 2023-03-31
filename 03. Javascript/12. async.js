const delayedColorChange = (color) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },1000)
       }) 
}

const rainbow = async () => {
    await delayedColorChange("red")
    await delayedColorChange("orange")
    await delayedColorChange("yellow")
    await delayedColorChange("green")
    await delayedColorChange("blue")
    await delayedColorChange("indigo")
    await delayedColorChange("violet")
}


// las siguientes dos formas de escribir el codigo van a dar el mismo resultado, con la diferencia es que una ejecuta la funcion asincrona y utiliza el then 
// y la otra crea otra funcion asincrona, ambas llaman a la funcion y una vez se acaba de ejecutar el bloque de codigo, continua
rainbow().then( () => {console.log("rainbow done")} )

const printRainbow = async () => {
    await rainbow();
    consolel.log("rainbow done")
}
