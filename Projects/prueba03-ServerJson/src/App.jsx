import { useState, useEffect } from 'react';
import './App.css'

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const fetchUsuarios = async () => {
      // TODO: 2. Implementar la llamada a la PokeAPI
        setLoading(true);

        try {
          // Guardo el resultado en una constante
          const res = await fetch(`http://localhost:3000/usuariosPlantillasMenu`);
          
          if (res.ok) { // Si sale bien se asigna los datos
            const data = await res.json();
            setUsuarios(data)
          } else {      
            setUsuarios(null)
          } 
        } catch (e) {
          console.error("Error al cargar los datos")
        } finally {
          setLoading(false)
        }
    }

    fetchUsuarios();
  }, [])
  
  
  
  return (
    <>
        {
          usuarios.map(usuario => {
            return <h1>{usuario.nombre}</h1>
          })
        }
      
    </>
  )
}
