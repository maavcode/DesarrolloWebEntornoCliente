import LightButton from "../components/LightButton"

export default function TrafficLight() {
    const colores = ["red", "yellow", "green"]
    
    return (
        <div style={{
            width: 250,
            height: 300,
            borderRadius: 30,
            backgroundColor: "black",
            margin: 'auto'}}
            onClick={
                () => {
                    alert("You clicked the trafc light")
                }
            }
            >
                
            <div style={{
                    flexDirection: "column",
                    padding: 30
                }}>
                    {
                        colores.map(color => {
                            {console.log(color)}
                                return(
                                    <LightButton color = {color} onClick = { e => { e.stopPropagation(); alert(color); }  }/>
                                )
                            }   
                        )
                    }
            </div>

        </div>
    )
    
    
}

//CIRCULO
/*style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            backgroundColor: "black"}}*/