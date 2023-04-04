const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let value = form.elements.queryInput.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${value}`);
    console.log(res.data[0].show.image.medium)
    getImages(res.data)
    form.elements.queryInput.value = "";
})

const getImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
        const img = document.createElement("img");
        img.src = result.show.image.medium;
        document.body.append(img);
    }}
}