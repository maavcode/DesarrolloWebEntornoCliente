import { useAuth } from "../../AuthContext";
import { movimientosRepository } from "../../backend/movimientosRepository";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Inicio() {
  const { user } = useAuth();
  const { datos: movimientos } = movimientosRepository(user);

  // -----------------------------
  // FECHA ACTUAL
  // -----------------------------
  const hoy = new Date();
  const mesActual = hoy.getMonth();
  const añoActual = hoy.getFullYear();

  // -----------------------------
  // CONVERTIR FECHA DE FIREBASE
  // -----------------------------
  const convertirFecha = (f) => {
    if (!f) return null;

    // Si es Timestamp de Firebase
    if (typeof f === "object" && f.toDate) {
      return f.toDate();
    }

    // Si es string ISO
    return new Date(f);
  };

  // -----------------------------
  // FILTRAR MOVIMIENTOS DEL MES
  // -----------------------------
  const movimientosMes = movimientos.filter((m) => {
    const fecha = convertirFecha(m.fecha);
    if (!fecha || isNaN(fecha)) return false;

    return (
      fecha.getMonth() === mesActual &&
      fecha.getFullYear() === añoActual
    );
  });

  // -----------------------------
  // RESUMEN DEL MES
  // -----------------------------
  const ingresos = movimientosMes
    .filter((m) => m.tipo === "Ingreso")
    .reduce((acc, m) => acc + Number(m.cantidad), 0);

  const gastos = movimientosMes
    .filter((m) => m.tipo === "Gasto")
    .reduce((acc, m) => acc + Number(m.cantidad), 0);

  const balance = ingresos - gastos;

  // -----------------------------
  // INGRESO MÁS ALTO DEL MES
  // -----------------------------
  const ingresoMasAlto = movimientosMes
    .filter((m) => m.tipo === "Ingreso")
    .sort((a, b) => Number(b.cantidad) - Number(a.cantidad))[0];

  // -----------------------------
  // GASTO MÁS ALTO DEL MES
  // -----------------------------
  const gastoMasAlto = movimientosMes
    .filter((m) => m.tipo === "Gasto")
    .sort((a, b) => Number(b.cantidad) - Number(a.cantidad))[0];

  // -----------------------------
  // CATEGORÍAS DEL MES
  // -----------------------------
  const categorias = {};
  movimientosMes.forEach((m) => {
    if (!categorias[m.categoria]) categorias[m.categoria] = 0;
    categorias[m.categoria] += Number(m.cantidad);
  });

  const categoriasLabels = Object.keys(categorias);
  const categoriasValores = Object.values(categorias);

  return (
    <div className="p-5">

      {/* TÍTULO */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Inicio</h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow space-y-10">

        {/* RESUMEN DEL MES */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resumen del Mes</h3>

          <div className="grid grid-cols-3 gap-4">
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
        </div>

        {/* ABAJO: DESTACADOS + PIE */}
        <div className="grid grid-cols-2 gap-10">

          {/* INGRESO MÁS ALTO + GASTO MÁS ALTO */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Movimientos del Mes</h3>

            <div className="space-y-3">

              {ingresoMasAlto && (
                <div className="p-3 bg-gray-100 rounded-lg shadow-sm flex justify-between">
                  <div>
                    <p className="font-medium">Ingreso más alto</p>
                    <p className="text-sm text-gray-600">{ingresoMasAlto.descripcion}</p>
                  </div>
                  <p className="text-green-600 font-semibold">+{ingresoMasAlto.cantidad}€</p>
                </div>
              )}

              {gastoMasAlto && (
                <div className="p-3 bg-gray-100 rounded-lg shadow-sm flex justify-between">
                  <div>
                    <p className="font-medium">Gasto más alto</p>
                    <p className="text-sm text-gray-600">{gastoMasAlto.descripcion}</p>
                  </div>
                  <p className="text-red-600 font-semibold">-{gastoMasAlto.cantidad}€</p>
                </div>
              )}

              {(!ingresoMasAlto && !gastoMasAlto) && (
                <p className="text-gray-500">No hay movimientos este mes.</p>
              )}

            </div>
          </div>

          {/* PIE CHART DEL MES */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Categorías del Mes</h3>

            <div className="w-full h-[300px]">
              {categoriasLabels.length === 0 ? (
                <p className="text-gray-500">No hay datos este mes.</p>
              ) : (
                <Pie
                  data={{
                    labels: categoriasLabels,
                    datasets: [
                      {
                        data: categoriasValores,
                        backgroundColor: [
                          "#60a5fa",
                          "#f472b6",
                          "#34d399",
                          "#facc15",
                          "#fb923c",
                          "#a78bfa",
                          "#f87171",
                        ],
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: "bottom" } },
                  }}
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
