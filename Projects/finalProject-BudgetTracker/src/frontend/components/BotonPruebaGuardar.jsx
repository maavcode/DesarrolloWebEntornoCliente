import { budgetRepository } from "../../backend/budgetRepository"; // ajusta la ruta
import { useAuth } from "../../AuthContext";
export default function BotonPruebaGuardar() {
  const { user } = useAuth();
  const { guardarEnBD } = budgetRepository(user);

  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      onClick={() =>
        guardarEnBD({
          tipo: "Ingreso",
          cantidad: 100,
          categoria: "Prueba",
          descripcion: "Movimiento de prueba",
          fecha: new Date(),
        })
      }
    >
      Guardar
    </button>
  );
}
