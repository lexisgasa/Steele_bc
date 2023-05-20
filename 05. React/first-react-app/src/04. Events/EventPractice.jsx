
export default function EventPractice({text, log}){
    function handleConsole(){
        alert(log)
    }
    return (
        <div>
            <button onClick={handleConsole}>{text}</button>
        </div>
    )
}