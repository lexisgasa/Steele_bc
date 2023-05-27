import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "http://inspo-quotes-api.herokuapp.com/quotes/random"

export default function QuoteFetcher(){
    const [quote, setQuote] = useState({text:"", author:""})

     useEffect(() => {
        fetchQuote();
     }, [])

     async function fetchQuote(){
        const response = await fetch (RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        console.log(jsonResponse)
        const randomQuote = jsonResponse.quote;
        console.log(randomQuote)
        setQuote(randomQuote);
    }

    return (
        <div>
            <h1>{quote.text}</h1>
            <blockquote>{quote.author}</blockquote>
            <button onClick={fetchQuote} style={{marginTop : "10vh"}} >Get Quote Using Handler</button>
        </div>
    )
}