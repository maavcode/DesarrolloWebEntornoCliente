import { useAuth } from "../../AuthContext";
import { movimientosRepository } from "../../backend/movimientosRepository";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

export default function Estadisticas() {
  const { user } = useAuth();
  const { datos: movimientos } = movimientosRepository(user);

  // Cálculo de ingresos y gastos
  const ingresos = movimientos
    .filter((m) => m.tipo === "Ingreso")
    .reduce((acc, m) => acc + Number(m.cantidad), 0);

  const gastos = movimientos
    .filter((m) => m.tipo === "Gasto")
    .reduce((acc, m) => acc + Number(m.cantidad), 0);

  // Agrupación por categorías
  const categorias = {};
  movimientos.forEach((m) => {
    if (!categorias[m.categoria]) categorias[m.categoria] = 0;
    categorias[m.categoria] += Number(m.cantidad);
  });

  const categoriasLabels = Object.keys(categorias);
  const categoriasValores = Object.values(categorias);

  return (
    <div className="p-5">

      {/* Título */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Estadísticas</h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">

        {/* CONTENEDOR DE LOS DOS GRÁFICOS */}
        <div className="grid grid-cols-2 gap-10">

          {/* Gráfico de barras */}
          <div className="max-w-full">
            <h3 className="text-lg font-semibold mb-3">Ingresos vs Gastos</h3>

            <div className="w-full h-[500px]">
              <Bar
                data={{
                  labels: ["Ingresos", "Gastos"],
                  datasets: [
                    {
                      label: "Cantidad (€)",
                      data: [ingresos, gastos],
                      backgroundColor: ["#4ade80", "#f87171"],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                }}
              />
            </div>
          </div>

          {/* Gráfico circular */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-3">Distribución por Categorías</h3>

            <div className="w-full h-[500px]">
              {categoriasLabels.length === 0 ? (
                <p className="text-gray-500">No hay datos suficientes.</p>
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
