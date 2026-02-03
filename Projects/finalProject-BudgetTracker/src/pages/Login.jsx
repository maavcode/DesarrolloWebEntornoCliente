import { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../App.css';

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
    <div className="auth-card">
          <h2>Bienvenido</h2>
          <p>Inicia sesión para gestionar tus datos</p>
          <div className="form-group">
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="button-group">
            <button className="btn-primary" onClick={() => handleAuth('login')}>Entrar</button>
            <button className="btn-secondary" onClick={() => handleAuth('registro')}>Registrarse</button>
          </div>
        </div>
  );
}
