import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

export function categoriasRepository(user) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "categorias"),
      where("uid", "==", user.uid)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      setCategorias(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, [user]);

  const crearCategoria = async (nombre) => {
    await addDoc(collection(db, "categorias"), {
      nombre,
      uid: user.uid,
    });
  };

  return { categorias, crearCategoria };
}
