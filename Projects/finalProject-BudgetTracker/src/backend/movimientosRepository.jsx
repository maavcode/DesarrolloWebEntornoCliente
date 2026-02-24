import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig"

export function movimientosRepository(user) {
  const [datos, setDatos] = useState([]);

  // Obtener datos
  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "movimientos"),
      where("uid", "==", user.uid),
      orderBy("fecha", "asc"),
    );

    const unsub = onSnapshot(q, (snapshot) => {
      setDatos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => unsub();
  }, [user]);

  // Insertar Dato
  const guardarEnBD = async ({
    tipo,
    cantidad,
    categoria,
    descripcion,
    fecha,
  }) => {
    try {
      await addDoc(collection(db, "movimientos"), {
        tipo,
        cantidad,
        categoria,
        descripcion,
        fecha: fecha || new Date(), // si no pasas fecha, usa la actual
        uid: user.uid,
      });
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  // Borrar Dato
  const borrarDato = async (id) => {
    if (window.confirm("¿Eliminar este movimiento?")) {
      await deleteDoc(doc(db, "movimientos", id));
    }
  };

  // Editar dato
  const editarDato = async (id, movimientoActual) => {
    const nuevoTipo = window.prompt(
      "Tipo (Ingreso/Gasto):",
      movimientoActual.tipo,
    );
    if (!nuevoTipo) return;

    const nuevaCantidad = window.prompt("Cantidad:", movimientoActual.cantidad);
    if (!nuevaCantidad) return;

    const nuevaCategoria = window.prompt(
      "Categoría:",
      movimientoActual.categoria,
    );
    if (!nuevaCategoria) return;

    const nuevaDescripcion = window.prompt(
      "Descripción:",
      movimientoActual.descripcion,
    );
    if (!nuevaDescripcion) return;

    await updateDoc(doc(db, "movimientos", id), {
      tipo: nuevoTipo,
      cantidad: Number(nuevaCantidad),
      categoria: nuevaCategoria,
      descripcion: nuevaDescripcion,
    });
  };

  return {
    datos,
    guardarEnBD,
    borrarDato,
    editarDato,
  };
}
