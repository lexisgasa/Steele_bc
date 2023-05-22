import { useState } from "react"

export default function Toggler(){
    const [isHappy, setIsHappy] = useState(true)
    const toggleHapinness = () => {
         setIsHappy(!isHappy);
    }
    
    return (
        <div>
            <button onClick={toggleHapinness} style={{fontSize:"5rem"}}>{isHappy ? "😀" : "😔"}</button>
        </div>
    )
}