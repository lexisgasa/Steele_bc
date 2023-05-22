import { useState } from "react"

export default function Counter(){

const [count, setCount ] = useState(5);


const addCount = () => {
    setCount(count+1);
    console.log(count)
}

return (
    <div>
        <button onClick={addCount}>{count}</button>
    </div>
)
}