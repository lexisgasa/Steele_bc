import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "http://inspo-quotes-api.herokuapp.com/quotes/random"

export default function QuoteFetcherLoader(){
    const [quote, setQuote] = useState({text:"", author:""});
    const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
        async function fetchQuote(){
            const response = await fetch (RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            console.log(jsonResponse)
            const randomQuote = jsonResponse.quote;
            console.log(randomQuote)
            setQuote(randomQuote);
            setIsLoading(false);
        }
        fetchQuote();
     }, [])



    return (
        <div>
            {isLoading && <p>Loading..</p>}
            <h1>{quote.text}</h1>
            <blockquote>{quote.author}</blockquote>
        </div>
    )
}