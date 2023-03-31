
// definicion de funcion para el callback, simulando que si el delay es supeior a 3000, dará error
const fakeRequestCallback = ( url, success, failure ) => {
    // el fake hace un delay de 500 hasta 5000
    const delay = Math.floor( Math.random()* 3500 )
    setTimeout(() => {
        if ( delay >= 3000 ) {
            failure ( "Request failed, connection timeout")
        } else {
            success (`Here is your ${url}`)
        }
    }, delay)
}


// similar definicion de funcion usando promesas, simulando que si el delay es supeior a 3000, dará error, 
// no son necesarios los parametros de success y failure
const fakeRequestPromise = ( url ) => {
    return new Promise ( (resolve, reject ) => {
        const delay = Math.floor( Math.random() * 3500 )
        setTimeout(( ) => {
            if (delay >= 3000) {
                reject ( "Request failed, connection timeout" ) 
            } else {
                resolve ( `Here is your ${url}`)
            }
        }, delay)
    })
}

// así queda la estructura de llamada de 3 funciones callback, creando el famoso callback hell
const callbackHell = () => {
    fakeRequestCallback( "books.com/",
    (response) => {
        console.log("IT WORKED")
        console.log(response)
        fakeRequestCallback("books.com/page2",
            (response2) => {
                console.log("2nd time also worked!!")
                console.log(response2)
                fakeRequestCallback( "books.com/page3",
                (response3) => {
                    console.log("3nd time also worked!!")
                    console.log(response3)
                },
                (err3) => {
                    console.log("3nd time was failure")
                    console.log(err3)
                })
            },(err2) => {
                console.log("2nd time was failure")
                console.log(err2)
            })
    }, (err) => {
        console.log("ERROR!!")
        console.log(err)
    }) 
}


// asi queda usando promesas, no varia mucho del callback hell
const promisesHell = () => {
    fakeRequestPromise("yelp.com/api/coffe/page1")
        .then((response1) => {
            console.log("IT WORKED!!")
            console.log(response1)
            fakeRequestPromise("yelp.com/api/coffe/page2")
            .then( (response2) => {
                console.log("2nd time also worked!")
                console.log(response2)
                fakeRequestPromise("yelp.com/api/coffe/page3")
                .then((response3) => {
                    console.log("3rd time also worked!")
                    console.log(response3)
                })
                .catch( (err3) => {
                    console.log("3rd time was a failure")
                    console.log(err3)
                })
            })
            .catch( (err2) => {
                console.log("2nd time was a failure")
                console.log(err2)
            })
        })
        .catch((err) => {
            console.log("OH NO, ERROR!!")
            console.log(err)
        })
}

// asi se utilizaria encadenando las promesas
const promises = () => {
    fakeRequestPromise("yelp.com/api/coffee/page1")
    .then( (response) => {
        console.log("IT WORKED!!")
        console.log(response)
        return fakeRequestPromise("yelp.com/api/coffee/page2")
    })
    .then ( (response2) => {
        console.log("2nd time also worked!")
        console.log(response2)
        return fakeRequestPromise("yelp.com/api/coffee/page3")
    })
    .then ( (response3) => {
        console.log("3rd time also worked!")
        console.log(response3)
    })
    .catch( (err) => {
        console.log("OH NO, IT WAS A FAILURE")
        console.log(err)
    })
}