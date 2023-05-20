function handleClick(){
    setTimeout(()=>{
        console.log("Clicked the BUTTON!!!")

    },1000)
}
function handleInput(e){
    console.log(e)
    console.log(e.key)
}

function Clicker(){
    return (
        <div>
            <h1>Click to log smthing</h1>
            <button onMouseMove={handleClick} >Click me!</button>
            <input type="text" onKeyDown={handleInput} />
        </div>
    )
}

export default Clicker;