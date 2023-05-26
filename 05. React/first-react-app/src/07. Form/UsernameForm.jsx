import { useState } from "react";

function UsernameForm(){
    const [username, setUsername] = useState(undefined);
    const updateUsername = (e) => {
        console.log("changed!!")
        // target se refiere al input, value al valor del evento
        console.log(e.target.value)
    }
    return (
        <div>
            <label htmlFor="username">Enter a username</label>
            <input type="text" placeholder="username" 
            id="username"
            value={username}
            onChange={updateUsername}/>
            <button>Submit!</button>
        </div>
    )

}

export default UsernameForm;