import { useState } from "react";
import BotonNuevoIngresoGasto from "../components/BotonNuevoIngresoGasto";
import { movimientosRepository } from "../../backend/movimientosRepository";
import { useAuth } from "../../AuthContext";

export default function IngresosGastos() {
  const { user } = useAuth();
  const { datos: movimientos } = movimientosRepository(user);

  const itemsPerPage = 5;
  const [page, setPage] = useState(0);

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;

  const currentItems = movimientos.slice(start, end);

  const nextPage = () => {
    if (end < movimientos.length) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  // 🔥 NUEVA FUNCIÓN PARA ARREGLAR FECHAS
  const formatFecha = (f) => {
    if (!f) return "—";

    // Timestamp de Firebase
    if (typeof f === "object" && f.toDate) {
      return f.toDate().toLocaleDateString();
    }

    // String ISO o fecha normal
    const d = new Date(f);
    if (!isNaN(d)) return d.toLocaleDateString();

    return "—";
  };

  return (
    <div className="p-5">

      {/* Título + Botón */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Movimientos</h2>

        <BotonNuevoIngresoGasto />
      </div>

      <div className="bg-white p-6 rounded-xl shadow">

        {/* TABLA */}
        <table className="w-full text-left border-collapse mb-5">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-3">Tipo</th>
              <th className="p-3">Cantidad</th>
              <th className="p-3">Categoría</th>
              <th className="p-3">Descripción</th>
              <th className="p-3">Fecha</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((mov, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{mov.tipo}</td>
                <td className="p-3">{mov.cantidad}€</td>
                <td className="p-3">{mov.categoria}</td>
                <td className="p-3">{mov.descripcion}</td>
                <td className="p-3">{formatFecha(mov.fecha)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINACIÓN */}
        <div className="flex justify-center gap-3">
          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={prevPage}
          >
            Anterior
          </button>

          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={nextPage}
          >
            Siguiente
          </button>
        </div>
      </div>

    </div>
  );
}
