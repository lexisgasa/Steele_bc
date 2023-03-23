// este numero maximo es para saber cuantos numeros random generar

let maxNumber = parseInt(prompt("Which will be the maximum number"))


const randomNumber = Math.floor( Math.random() * maxNumber ) + 1;
console.log(randomNumber)

let guess = prompt("Make a guess");
let attempts = 1;

//  while para preguntar hasta que se acierte, el promp genera string por lo tanto se necesita el parseint para pasarlo a numero, ya que queremos que la q sirva para salir
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