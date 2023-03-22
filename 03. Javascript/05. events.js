
// case 2 - property
const btn2 = document.querySelector("#v2");

btn2.onclick = () => {
    console.log("clicked!")
};


// case 3 - event listener
const btn3 = document.querySelector("#v3");

btn3.addEventListener("click", () => { console.log("also clicked")} )