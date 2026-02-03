import { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import { useAuth } from "../AuthContext";
import { signOut } from "firebase/auth";
import { 
  collection, addDoc, onSnapshot, query, where, orderBy, doc, deleteDoc, updateDoc 
} from "firebase/firestore";
import '../App.css';

export default function Home() {
  const { user } = useAuth();
  const [texto, setTexto] = useState("");
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "mis_datos"),
      where("uid", "==", user.uid),
      orderBy("fecha", "desc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      setDatos(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });

    return () => unsub();
  }, [user]);

  const guardarEnBD = async (e) => {
    e.preventDefault();
    if (!texto.trim()) return;

    await addDoc(collection(db, "mis_datos"), {
      contenido: texto,
      uid: user.uid,
      fecha: new Date()
    });

    setTexto("");
  };

  const borrarDato = async (id) => {
    if (window.confirm("¿Eliminar este registro?")) {
      await deleteDoc(doc(db, "mis_datos", id));
    }
  };

  const editarDato = async (id, contenidoActual) => {
    const nuevoTexto = window.prompt("Editar contenido:", contenidoActual);
    if (nuevoTexto && nuevoTexto !== contenidoActual) {
      await updateDoc(doc(db, "mis_datos", id), { contenido: nuevoTexto });
    }
  };

  return (
    <div className="app-card">
          <header className="header">
            <div className="user-info">
              <span>Hola, <strong>{user.email}</strong></span>
            </div>
            <button className="btn-logout" onClick={() => signOut(auth)}>Salir</button>
          </header>
          
          <section className="content">
            <form className="input-area" onSubmit={guardarEnBD}>
              <input 
                value={texto} 
                onChange={e => setTexto(e.target.value)} 
                placeholder="Escribe una nueva nota..." 
              />
              <button type="submit" className="btn-add">Añadir</button>
            </form>

            <ul className="data-list">
              {datos.map(item => (
                <li key={item.id} className="data-item">
                  <span className="item-text">{item.contenido}</span>
                  <div className="item-actions">
                    <button className="btn-edit" onClick={() => editarDato(item.id, item.contenido)}>✏️</button>
                    <button className="btn-delete" onClick={() => borrarDato(item.id)}>🗑️</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
  );
}
