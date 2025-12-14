import InventoryControls from './components/InventoryControls';
import ProductList from './components/ProductList'
import inventoryReducer from './logic/inventoryReducer';
import { useReducer } from 'react';

export default function InventoryApp() {
  
  const [inventory, dispatch] = useReducer(inventoryReducer, initialInventory);

  return (
    <>
      <ProductList inventory={inventory} dispatch={dispatch}/>
      <InventoryControls inventory={inventory} dispatch={dispatch}/>
    </>
  )
  
}

  const initialInventory = [
    {
      id: 101,
      name: "Tornillos M4 (Caja)", 
      stock: 150, 
      price: 0.15
    },
    {
      id: 102, 
      name: "Cable Ethernet 5m", 
      stock: 50, 
      price: 5.99 
    },
    { 
      id: 103, 
      name: "Kit de Herramientas", 
      stock: 12, 
      price: 45.0 
    },
  ]