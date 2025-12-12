


export default function ProductList({ inventory, dispatch }) {
  
  return (
    <>
    <table>
      <tr>
        <td></td>
        <td>Nombre</td>
        <td>Stock</td>
        <td>Precio</td>
        <td>Accion 1</td>
        <td>Accion 2</td>
      </tr>

      {
      inventory.map((product) => (
        <tr className="">
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.stock}</td>
          <td>{product.price}</td>
          <td>
            <button>
            <h3>Vender Item</h3>
          </button>
          </td>
          <td>
            <button onClick={""}>
            <h3>Eliminar Item</h3>
          </button>
          </td>
        </tr>


      ))
      }
    </table>
      
    </>
  );
}
