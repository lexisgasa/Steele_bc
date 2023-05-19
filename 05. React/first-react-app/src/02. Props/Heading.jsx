//  Ejemplo de cambio dinamico de estilos mediante props

export default function Heading({color="teal", text, fontSize="2rem"}){
    return <h2 style={{color: color, fontSize: fontSize}}> {text} </h2>
}