export default function LightButton( {color, onClick} ) {
     const colores = {
        red: "red", 
        yellow: "yellow", 
        green: "green"
    }

    return(
        <div style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            backgroundColor: colores[color],
            margin: '15px auto',
            }}
            onClick={onClick}>
        </div>
    )
}