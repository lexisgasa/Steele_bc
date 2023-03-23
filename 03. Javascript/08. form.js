const form = document.querySelector("form")
const input = document.querySelector("input")
const stuffList = document.querySelector("#stuffList")

// preventdefault para no perder la data
// crear un elemento <li> </li>, luego darle un texto interno que es el guardado en la variable del input.value
// con el <li> </li> lleno, meterlo en el <ul></ul> y al darle al submit aparecerá en la lista
// acabar reseteando el texto

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inpValue = input.value;
    const list = document.createElement("li");
    list.innerText = inpValue;
    stuffList.append(list);
    input.value = ""
})


