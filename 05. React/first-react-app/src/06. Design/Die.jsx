import "./Die.css"
export default function Die({value = 1, color= "staleblue"}){
    return <div className="Die" style={{backgroundColor: color}} >{value}</div>
}