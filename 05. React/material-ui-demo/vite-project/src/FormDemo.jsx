import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function FormDemo(){

    const [name, setName] = useState("")
    const updateName = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <h1>name is {name}</h1>
            <TextField id="outlined-basic" label={undefined} variant="outlined"
            placeholder='Puppy name' 
            valeu={name}
            onChange={updateName}/>
        </div>
    )
}