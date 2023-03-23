const title = document.createElement("h1")
title.innerText = "Button random color changer"
document.body.append(title) 


// funcion para obtener un numero random ya que el rgb va del 0 al 255
const randomColor = () => {
    let r = Math.floor( Math.random() * 256 )
    let g = Math.floor( Math.random() * 256 )
    let b = Math.floor( Math.random() * 256 )
    return `rgb(${r}, ${g}, ${b})`
}

// for para crear tantos botones como se quieran

for ( let i = 0; i < 25; i++ ) {
    const btn = document.createElement("button")
    btn.innerText = "Click me!"
    document.body.append(btn)
}

const btns = document.querySelectorAll("button")

//  con los botonoes seleccionados, ciclo for para que cada uno llame a la funcion y pueda hacer un numero random por separado

for ( let button of btns ) {
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = randomColor();
        button.style.color = randomColor();
    })
}

// lo mismo pero con h2's 

for ( let i = 0; i < 10; i++ ) {
    const headers = document.createElement("h2")
    headers.append("clickable header")
    document.body.append(headers)
}

const headers = document.querySelectorAll("h2");

for ( let header of headers ) {
    header.addEventListener("mouseenter", () => {
    header.style.backgroundColor = randomColor();
    header.style.color = randomColor();
})
}