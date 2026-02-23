import { useState, useEffect } from "react";
import { auth, db } from "../../firebaseConfig";
import { useAuth } from "../../AuthContext";
import { signOut } from "firebase/auth";
import Inicio from "../controls/Inicio";
import IngresosGastos from "../controls/IngresosGastos";
import Resumenes from "../controls/Resumenes";
import Estadisticas from "../controls/Estadisticas";

export default function Home() {
  const { user } = useAuth();
  const [userControl, setUserControl] = useState(<Inicio />);

  return (
    <div class="flex items-center justify-center h-screen p-5">
      <div class="bg-white p-5 rounded-xl shadow-lg w-full h-full">
        <div class="flex w-full h-full">
          <div class="w-64 bg-gray-200 rounded-xl shadow-lg p-6 mr-5">
            <ul class="space-y-3">
              <h1 className="text-lg font-medium">
                Bienvenido <span className="text-blue-500">{user.email}</span>
              </h1>

              <li class="flex items-center gap-3 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200" onClick={() => setUserControl(<Inicio/>)}>
                <span>🏠</span>
                <span>Pantalla principal</span>
              </li>

              <li class="flex items-center gap-3 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200" onClick={() => setUserControl(<IngresosGastos/>)}>
                <span>💰</span>
                <span>Ingresos y Gastos</span>
              </li>

              <li class="flex items-center gap-3 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200" onClick={() => setUserControl(<Resumenes />)}>
                <span>📄</span>
                <span>Resúmenes</span>
              </li>

              <li class="flex items-center gap-3 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200" onClick={() => setUserControl(<Estadisticas />)}>
                <span>📊</span>
                <span>Estadísticas</span>
              </li>

              <li class="flex items-center gap-3 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200" onClick={()=>{}}>
                <span>📤</span>
                <span>Exportación</span>
              </li>
            </ul>
          </div>

          <div class="flex-1 bg-gray-200 rounded-xl shadow-lg p-8">
            {userControl}
          </div>
        </div>
      </div>
    </div>
  );
}
