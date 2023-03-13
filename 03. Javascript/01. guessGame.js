let maxNumber = parseInt(prompt("Which will be the maximum number"))


const randomNumber = Math.floor( Math.random() * maxNumber ) + 1;
console.log(randomNumber)

let guess = prompt("Make a guess");
let attempts = 1;

while ( parseInt(guess) !== randomNumber ) {
    if (guess === "q" ) break;
    attempts++;

    if (guess > randomNumber){
        guess = prompt("You should try a lower number");
    } else {
        guess = prompt("You should try a higher number");
    }

}
if (guess === "q") {
    
    console.log("You ran away !!")
} else {
console.log(`You guessed correctly! It took ${attempts} attempts !!`) }