import React, { useState } from 'react';

export default function InventoryControls({ inventory, dispatch }) {

    // Estados para Añadir Producto
    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductStock, setNewProductStock] = useState('')

    // Estados para Reponer Stock
    const [restockId, setRestockId] = useState('');
    const [restockAmount, setRestockAmount] = useState('');

    // Estados para Actualizar Precio
    const [updateId, setUpdateId] = useState('');
    const [newPrice, setNewPrice] = useState('');




    const handleAddProduct = (e) => {
        e.preventDefault();

        const priceValue = parseFloat(newProductPrice);
        const stockValue = parseInt(newProductStock);

        dispatch({
            type: 'ADD_PRODUCT',
            name: newProductName,
            price: priceValue,
            stock: isNaN(stockValue) ? 0 : stockValue  // Esta linea se la pregunte a chatGPT
        });

        setNewProductName('');
        setNewProductPrice('');
        setNewProductStock('');

    };


    const handleRestock = (e) => {

        e.preventDefault();
        const id = parseInt(restockId);
        const amount = parseInt(restockAmount);

        dispatch({
            type: 'RESTOCK',
            id: id,
            amount: amount,
        });

        setRestockId('');
        setRestockAmount('');
    };


    const handlePriceUpdate = (e) => {
        e.preventDefault();
        const id = parseInt(updateId);
        const price = parseFloat(newPrice);

        dispatch({
            type: 'PRICE_UPDATE',
            id: id,
            newPrice: price,
        });

        setUpdateId('');
        setNewPrice('');
    };

    return (
        <div>

            <h3>Añadir un producto</h3>
            <form onSubmit={handleAddProduct}>
                <input
                    type="text"
                    placeholder="Añadir Producto"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Añadir Precio"
                    value={newProductPrice}
                    onChange={(e) => setNewProductPrice(e.target.value)}
                    step="0.01"
                    min="0"
                    required
                />
                <input
                    type="number"
                    placeholder="Añadir Stock"
                    value={newProductStock}
                    onChange={(e) => setNewProductStock(e.target.value)}
                    min="0"
                    required
                />
                <button type="submit">
                    Add Producto
                </button>
            </form>

            <h3>Reponer Stock</h3>
            <form onSubmit={handleRestock}>
                <input
                    type="number"
                    placeholder="ID Producto"
                    value={restockId}
                    onChange={(e) => setRestockId(e.target.value)}
                    min="1"
                    required
                />
                <input
                    type="number"
                    placeholder="Cantidad"
                    value={restockAmount}
                    onChange={(e) => setRestockAmount(e.target.value)}
                    min="1"
                    required
                />
                <button type="submit">
                    Reponer
                </button>
            </form>

            <h3>Actualizar Precio</h3>
            <form onSubmit={handlePriceUpdate}>
                <input
                    type="number"
                    placeholder="ID Producto"
                    value={updateId}
                    onChange={(e) => setUpdateId(e.target.value)}
                    min="1"
                    required
                />
                <input
                    type="number"
                    placeholder="Nuevo Precio"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    step="0.01"
                    min="0"
                    required
                />
                <button type="submit">
                    Actualizar
                </button>
            </form>
        </div>
    );
}