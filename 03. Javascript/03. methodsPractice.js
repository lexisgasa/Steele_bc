const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]




numbers.forEach((n, y) => console.log(`value: ${n} index:  ${y}`))

console.log("********************************************************")






const doubles = numbers.map( n => n * 2 )
console.log(doubles)

console.log("********************************************************")





let movies =[
    {
        Title: "Avatar",
        Type: "movie",
        Year: 2009
    },
    {
        Title: "I Am Legend",
        Type: "movie",
        Year: 2007 
    }, 
    {
        Title: "The Lord of the Rings",
        Type: "movie",
        Year: 2001
    },
    {
        Title: "Harry Potter and the philosopher stone",
        Type: "book",
        Year: 1997
    },
    {
        Title: "The great Gatsby",
        Type: "book",
        Year: 1925
    },
    {
        Title: "Titanic",
        Type: "movie",
        Year: 1997
    },
    {
        Title: 300,
        Type: "movie",
        Year: 2006
    } 
]

    movies.forEach(name => {
        console.log(`${name.Title} was created the year ${name.Year}`)
    })


console.log("********************************************************")


const odds = numbers.filter( n => n % 2 === 1 );
console.log(odds);
console.log(odds.filter ( n => n <= 5 ));


console.log(movies);
const moviesFilter = movies.filter( n => n.Type.toLowerCase() === "movie" );
console.log(moviesFilter);
console.log(movies.filter( n => n.Type.toLowerCase() === "book" ));


console.log(movies.filter( n => n.Type.toLowerCase() === "movie" && n.Year > 2000 ) )

console.log(moviesFilter.filter( n => n.Year > 2005 ));


console.log( movies.filter( n => n.Title.toString().toLowerCase().includes("the")) );

    


const names = ["Eliot", "Carrie", "Stephany", "Alex", "Dani"]

const validUserNames = (usernames) => {
    return usernames.filter( n => n.length < 6 )
}

console.log(validUserNames(names))

console.log("********************************************************")
