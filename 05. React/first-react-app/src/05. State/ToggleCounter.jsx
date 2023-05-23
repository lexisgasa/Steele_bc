import { useState } from "react"

export default function Toggler(){
    const [isHappy, setIsHappy] = useState(true)
    const [count, setCount] = useState(0)
    const toggleHapinness = () => {
         setIsHappy(!isHappy);
    }
    const double = () =>{
        setCount(count+2);
    }
    return (
        <div>
            <button onClick={toggleHapinness} style={{fontSize:"5rem"}}>{isHappy ? "😀" : "😔"}</button>
            <button onClick={double
            } >{count}</button>
        </div>
    )
}