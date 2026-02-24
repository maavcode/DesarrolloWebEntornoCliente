import { useNavigate } from "react-router-dom";

export default function BotonNuevoIngresoGasto() {
  const navigate = useNavigate();

  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      onClick={() => navigate("/nuevoIngresoGasto")}
    >
      Nuevo
    </button>
  );
}
