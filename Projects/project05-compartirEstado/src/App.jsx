// App.js

// El objetivo de este proyecto es elevar el estado para que esté a nivel del padre (App.js). 
// Los componentes hijos deben recibir una prop con el valor del estado.

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import ContentCard from './ContentCard';


  

export default function App() {

  

  const [isDarkMode, setIsDarkMode] = useState(false);

  const cardStyle = {
    backgroundColor: isDarkMode ? '#333' : '#eee',
    color: isDarkMode ? 'white' : 'black',
    padding: '20px',
    borderRadius: '8px'
  };

  const onToggle = () => {
      setIsDarkMode(!isDarkMode);
  }
    
  return (
    <div style={cardStyle}> 
      <h1>Mi Aplicación con Tema Dinámico</h1>
      
      <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggle} />
      
      <ContentCard isDarkMode={isDarkMode}/>
      
    </div>
  );
}