export default function ProductList({ inventory, dispatch }) {
  
  const handleSell = (id) => {
    dispatch({
      type: 'SELL_ITEM',
      id: id,
      amount: 1, 
    });
  };

  const handleRemove = (id) => {
    if (window.confirm('¿Estás seguro?')) { // Esta linea se la pregunte a chatGPT
      dispatch({
        type: 'REMOVE_PRODUCT',
        id: id,
      });
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Accion 1</th>
            <th>Accion 2</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleSell(product.id)}>
                  Vender Item
                </button>
              </td>
              <td>
                <button onClick={() => handleRemove(product.id)}>
                  Eliminar Item
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}