
// const delayedRainbow = (color, delay) => {
//     return new Promise ( ( resolve, reject ) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     } )
// }

// delayedRainbow("red",1000)
// .then( () => delayedRainbow("red", 1000) )
// .then( () => delayedRainbow("orange", 1000) )
// .then( () => delayedRainbow("yellow", 1000) )
// .then( () => delayedRainbow("green", 1000) )
// .then( () => delayedRainbow("blue", 1000) )
// .then( () => delayedRainbow("indigo", 1000) )
// .then( () => delayedRainbow("violet", 1000) )


// ejemplo ih
const sonChecksWeater = () => {
    return new Promise ( (resolve, reject) => {
            const possibleOutcome = ["Sunny", "Rainy", "Error"]
            const randomNumber = Math.floor(Math.random()*3)
            const result = possibleOutcome[randomNumber]
            if ( result === "Sunny" || result === "Rainy") {
                resolve(result);
                console.log(`Today is ${result}`)
            } else { 
                reject(result); 
            }
    }) 
}

const fatherDecides = () => {
    setTimeout( () => {
        sonChecksWeater().then( (weather) => {
            if (weather === "Sunny") {
                console.log("We will go outside")
            } else {
                console.log("Will rain so we stay home today")
            }
        } )
    }, 1000)
}