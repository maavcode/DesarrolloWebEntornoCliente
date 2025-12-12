
export default function inventoryReducer(inventory, action) {
    switch (action.type) {
        // AÑADIR PRODUCTO
        case "ADD_PRODUCT":
            // Creamos el nuevo producto con el siguiente ID y stock inicial 0
            const newProduct = {
                name: action.name,
                stock: 0,
                price: action.price || 0.0 // Si no proporciona precio, pone 0.0
            }
            return[...inventory, newProduct]
            break;
    }
}