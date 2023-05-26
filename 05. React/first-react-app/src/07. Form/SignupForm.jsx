import { useState } from "react";

function SignupForm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const updateFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const updateLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleSubmit = () => {
         console.log(firstName, lastName)
    }
    return (
        <div>
            <section>
            <label htmlFor="firstName">Enter your first name</label>
            <input type="text" placeholder="firstName" 
            id="firstName"
            value={firstName}
            onChange={updateFirstName}/>
            </section>
            <section>
            <label htmlFor="lastName">Enter the last name</label>
            <input type="text" placeholder="lastName" 
            id="lastName"
            value={lastName}
            onChange={updateLastName}/>
            </section>
            <button onClick={handleSubmit}>Submit!</button>
        </div>
    )

}

export default SignupForm;