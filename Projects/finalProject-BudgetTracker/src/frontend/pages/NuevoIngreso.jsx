import { useState } from "react";
import { useAuth } from "../../AuthContext";
import { movimientosRepository } from "../../backend/movimientosRepository";
import { categoriasRepository } from "../../backend/categoriasRepository";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function NuevoIngresoGasto() {
  const { user } = useAuth();
  const { guardarEnBD } = movimientosRepository(user);
  const { categorias, crearCategoria } = categoriasRepository(user);
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("Ingreso");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("Ingreso"); // por defecto
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState(new Date()); // ← NUEVO

  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [mostrarNuevaCategoria, setMostrarNuevaCategoria] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await guardarEnBD({
      tipo,
      cantidad: Number(cantidad),
      categoria: tipo === "Ingreso" ? "Ingreso" : categoria,
      descripcion,
      fecha, // ← ahora guarda la fecha seleccionada
    });

    navigate("/movimientos");
  };

  const handleCrearCategoria = async () => {
    if (!nuevaCategoria.trim()) return;

    await crearCategoria(nuevaCategoria);
    setCategoria(nuevaCategoria);
    setNuevaCategoria("");
    setMostrarNuevaCategoria(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-xl shadow-lg w-150 m-20">

        <h2 className="text-2xl font-semibold mb-1">Nuevo Movimiento</h2>
        <p className="text-gray-600 mb-6">
          Añade un ingreso o gasto a tu historial
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Tipo */}
          <select
            className="p-3 border border-gray-300 rounded-lg text-base"
            value={tipo}
            onChange={(e) => {
              const nuevoTipo = e.target.value;
              setTipo(nuevoTipo);

              if (nuevoTipo === "Ingreso") {
                setCategoria("Ingreso");
              } else {
                setCategoria("");
              }
            }}
          >
            <option value="Ingreso">Ingreso</option>
            <option value="Gasto">Gasto</option>
          </select>

          {/* Cantidad */}
          <input
            type="number"
            placeholder="Cantidad"
            className="p-3 border border-gray-300 rounded-lg text-base"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />

          {/* Categoría SOLO si es gasto */}
          {tipo === "Gasto" && (
            <div className="flex gap-3">
              <select
                className="p-3 border border-gray-300 rounded-lg text-base w-full"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
              >
                <option value="">Selecciona una categoría</option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.nombre}>
                    {cat.nombre}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className="bg-gray-200 px-4 rounded-lg"
                onClick={() => setMostrarNuevaCategoria(true)}
              >
                +
              </button>
            </div>
          )}

          {/* Descripción */}
          <input
            type="text"
            placeholder="Descripción"
            className="p-3 border border-gray-300 rounded-lg text-base"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />

          {/* FECHA — NUEVO CAMPO */}
          <div>
            <p className="text-gray-600 mb-1">Fecha</p>
            <DatePicker
              selected={fecha}
              onChange={(date) => setFecha(date)}
              dateFormat="dd/MM/yyyy"
              className="p-3 border border-gray-300 rounded-lg text-base w-full"
            />
          </div>

          {/* Botones */}
          <div className="flex gap-10 mt-4">
            <button
              type="button"
              className="w-full bg-gray-200 text-gray-800 font-semibold py-2.5 px-4 rounded-lg"
              onClick={() => navigate("/movimientos")}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="w-full bg-gray-200 text-gray-800 font-semibold py-2.5 px-4 rounded-lg"
            >
              Guardar
            </button>
          </div>
        </form>

        {/* Modal nueva categoría */}
        {mostrarNuevaCategoria && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-2">Nueva Categoría</h3>

            <input
              type="text"
              className="p-3 border border-gray-300 rounded-lg w-full mb-3"
              placeholder="Nombre de categoría"
              value={nuevaCategoria}
              onChange={(e) => setNuevaCategoria(e.target.value)}
            />

            <div className="flex gap-3">
              <button
                className="w-full bg-gray-200 py-2 rounded-lg"
                onClick={handleCrearCategoria}
              >
                Crear
              </button>

              <button
                className="w-full bg-gray-200 py-2 rounded-lg"
                onClick={() => setMostrarNuevaCategoria(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
