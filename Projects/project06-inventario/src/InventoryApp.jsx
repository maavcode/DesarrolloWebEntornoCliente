import InventoryControls from './components/InventoryControls';
import ProductList from './components/ProductList'
import inventoryReducer from './logic/inventoryReducer';
import { useReducer } from 'react';

export default function InventoryApp() {
  
  
  
  const [inventory, dispatch] = useReducer(inventoryReducer, initialInventory);
  
  function handleRemove(){
    dispatch({
      type: 'remove',
      id: nextId++
    });
  }

  return (
    <>
      <ProductList  inventory={inventory} dispatch={dispatch}/>
      
    </>
  )
  
}

let nextId = 104;
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