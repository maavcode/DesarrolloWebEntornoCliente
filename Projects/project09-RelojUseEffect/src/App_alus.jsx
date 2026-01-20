import { useState, useEffect } from 'react';

export default function FocusTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;

    // Solo creamos el intervalo si isActive es true
    if (isActive){
      console.log("Iniciando nuevo intervalo...")
      // mdn setInterval
      interval = setInterval(() =>{
        setSeconds(s => s + 1);
      }, 1000);
    }

    // FUNCIÓN DE LIMPIEZA (Cleanup)
    // Se ejecuta al desmontar o antes de volver a ejecutar el efecto
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }

  }, [isActive]);// Se vuelve a ejecutar si el usuario pausa/reanuda

  // Segundo Effect para sincronizar con la API del navegador (Título de la pestaña)
  useEffect(() => {
    document.title = `Llevas ${seconds}s de sesion`;
  }, [seconds]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Tiempo de sesión: {seconds} segundos</h1>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pausar Reloj' : 'Reanudar Reloj'}
      </button>
      <button onClick={() => setSeconds(0)}>
        Reiniciar
      </button>
    </div>
  );
}