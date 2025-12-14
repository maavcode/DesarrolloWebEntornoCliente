export default function inventoryReducer(inventory, action) {
    
    let nextId = 104; // O el número que uses para empezar la secuencia de IDs

    switch (action.type) {
        // 1. AÑADIR PRODUCTO
        case "ADD_PRODUCT": {
            // Creamos el nuevo producto con el siguiente ID y stock inicial 0
            const newProduct = {
                id: nextId++,
                name: action.name,
                stock: action.stock || 0, // Añadido por mi, Usa 0 si no se proporciona
                price: action.price || 0.0, // Usa 0.00 si no se proporciona precio
            };

            // Devolvemos un nuevo array con el producto antiguo y el nuevo al final
            return [...inventory, newProduct];
        }

        // 2. AUMENTAR STOCK
        case "RESTOCK": {
            // Usamos .map para devolver un nuevo array
            return inventory.map((product) => {
                if (product.id === action.id) {
                    // Si encontramos el producto, devolvemos un NUEVO OBJETO con el stock actualizado
                    return { ...product, stock: product.stock + action.amount };
                }
                // Devolvemos el producto original (por referencia) si no hay cambios
                return product;
            });
        }

        // 3. VENDER ÍTEM (DISMINUIR STOCK)
        case "SELL_ITEM": {
            return inventory.map((product) => {
                if (product.id === action.id) {
                    // Calculamos el nuevo stock, asegurándonos de que no sea negativo
                    const newStock = Math.max(0, product.stock - action.amount);

                    // Devolvemos un nuevo objeto
                    return { ...product, stock: newStock };
                }
                return product;
            });
        }

        // 4. ELIMINAR PRODUCTO
        case "REMOVE_PRODUCT": {
            // Usamos .filter para devolver un nuevo array que excluya el producto con el ID especificado
            return inventory.filter((product) => product.id !== action.id);
        }

        // 5. ACTUALIZAR PRECIO
        case "PRICE_UPDATE": {
            return inventory.map((product) => {
                if (product.id === action.id) {
                    // Devolvemos un nuevo objeto con el precio actualizado
                    return { ...product, price: action.newPrice };
                }
                return product;
            });
        }

        // Caso por defecto para acciones no reconocidas
        default: {
            throw Error("Unknown action type: " + action.type);
        }
    }
}