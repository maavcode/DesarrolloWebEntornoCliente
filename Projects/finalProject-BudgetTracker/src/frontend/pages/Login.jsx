import { useState } from "react";
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (tipo) => {
    try {
      if (tipo === "registro") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/app");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-xl shadow-lg w-150 m-20">
          <h2 className="text-2xl font-semibold mb-1">Bienvenido</h2>
          <p className="text-gray-600 mb-6">
            Inicia sesión para gestionar tus datos
          </p>

          <div className="flex flex-col gap-3 my-5">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg text-base"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg text-base"
            />
          </div>

          <div className="flex gap-10">
            <button
              className="w-full bg-gray-200 text-gray-800 font-semibold py-2.5 px-4 rounded-lg"
              onClick={() => handleAuth("login")}
            >
              Entrar
            </button>

            <button
              className="w-full bg-gray-200 text-gray-800 font-semibold py-2.5 px-4 rounded-lg"
              onClick={() => handleAuth("registro")}
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/*

*/
