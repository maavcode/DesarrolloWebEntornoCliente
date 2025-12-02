// ThemeToggle.js
import { useState } from 'react';

export default function ThemeToggle({isDarkMode, onToggle}) {

  const cardStyle = {
    backgroundColor: isDarkMode ? '#333' : '#eee',
    color: isDarkMode ? '#eee' : '#333'
  }

  return (
    <button style={cardStyle} onClick={onToggle}>
      {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
}