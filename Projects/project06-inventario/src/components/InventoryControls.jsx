import { useState } from "react"

export default function InventoryControls() {
    
    const [pruducto, setProducto] = useState("");
    
    return(
        <>
            <h3>Añadir un producto</h3>
            <div>
                <input placeholder={producto}>

                </input>
                <input placeholder={producto}>
                    
                </input>
            </div>

            <h3>Reponer Stock</h3>
            
            <h3>Actualizar Precio</h3>


        </>
    )
}