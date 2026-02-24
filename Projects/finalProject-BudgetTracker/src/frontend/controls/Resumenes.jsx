import { useAuth } from "../../AuthContext";
import { movimientosRepository } from "../../backend/movimientosRepository";

export default function Resumenes() {
  const { user } = useAuth();
  const { datos: movimientos } = movimientosRepository(user);

  // Cálculos
  const ingresos = movimientos
    .filter((m) => m.tipo === "Ingreso")
    .reduce((acc, m) => acc + Number(m.cantidad), 0);

  const gastos = movimientos
    .filter((m) => m.tipo === "Gasto")
    .reduce((acc, m) => acc + Number(m.cantidad), 0);

  const balance = ingresos - gastos;

  // Agrupación por categorías
  const categorias = {};
  movimientos.forEach((m) => {
    if (!categorias[m.categoria]) categorias[m.categoria] = 0;
    categorias[m.categoria] += Number(m.cantidad) * (m.tipo === "Gasto" ? -1 : 1);
  });

  return (
    <div className="p-5">

      {/* Título */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Resúmenes</h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">

        {/* Resumen general */}
        <h3 className="text-lg font-semibold mb-3">Resumen General</h3>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-gray-600">Ingresos</p>
            <p className="text-green-600 font-bold text-xl">{ingresos}€</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-gray-600">Gastos</p>
            <p className="text-red-600 font-bold text-xl">{gastos}€</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-gray-600">Balance</p>
            <p className={balance >= 0 ? "text-green-600 font-bold text-xl" : "text-red-600 font-bold text-xl"}>
              {balance}€
            </p>
          </div>
        </div>

        {/* Resumen por categorías */}
        <h3 className="text-lg font-semibold mb-3">Por Categorías</h3>

        <div className="space-y-3">
          {Object.keys(categorias).length === 0 && (
            <p className="text-gray-500">No hay movimientos registrados.</p>
          )}

          {Object.keys(categorias).map((cat) => (
            <div
              key={cat}
              className="p-3 bg-gray-100 rounded-lg shadow-sm flex justify-between"
            >
              <span className="font-medium">{cat}</span>
              <span className={categorias[cat] < 0 ? "text-red-600" : "text-green-600"}>
                {categorias[cat]}€
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
