const form = document.querySelector("form")
const input = document.querySelector("input")
const stuffList = document.querySelector("#stuffList")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inpValue = input.value;
    const list = document.createElement("li");
    list.innerText = inpValue;
    stuffList.append(list);
    input.value = ""
})


