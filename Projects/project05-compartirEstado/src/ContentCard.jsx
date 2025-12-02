// ContentCard.js
export default function ContentCard({ isDarkMode }) {
  // Usar el estado recibido para aplicar estilos condicionales
  const cardStyle = {
    backgroundColor: isDarkMode ? '#333' : '#eee',
    color: isDarkMode ? 'white' : 'black',
    padding: '20px',
    borderRadius: '8px'
  };

  return (
    <div style={cardStyle}>
      <h3>Título del Contenido</h3>
      <p>
        Este texto cambia automáticamente de color porque su componente padre (App) 
        le pasa el estado actual del tema.
      </p>
    </div>
  );
}