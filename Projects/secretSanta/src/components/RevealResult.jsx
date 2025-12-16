import React, { useState } from 'react';
import { useSecretSanta } from '../context/SecretSantaContext';

const RevealResult = () => {
  const { state } = useSecretSanta();
  const { participants, assignments, isDrawn } = state;

  
  const [selectedPerson, setSelectedPerson] = useState('');
  const [revealedAssignment, setRevealedAssignment] = useState(null);

  if (!isDrawn) {
    return null;
  }

  const handleReveal = () => {
    if (selectedPerson && assignments[selectedPerson]) {
      
      setRevealedAssignment(assignments[selectedPerson]);
    } else {
      setRevealedAssignment(null);
    }
  };

  return (
    <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
      <h3>👁️ Revelar tu Amigo Invisible</h3>
      <p>Selecciona tu nombre para ver a quién le tienes que regalar.</p>

      <select
        value={selectedPerson}
      
        onChange={(e) => {
          setSelectedPerson(e.target.value);
          setRevealedAssignment(null); 
        }}
      >
        <option value="">-- Selecciona tu nombre --</option>
        {participants.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <button 
        onClick={handleReveal} 
        disabled={!selectedPerson} 
        style={{ marginLeft: '10px' }}
      >
        Mostrar Mi Asignación
      </button>

      {revealedAssignment && (
        <p style={{ fontWeight: 'bold', fontSize: '1.2em', color: 'darkred' }}>
          ¡Hola, {selectedPerson}! Tienes que regalar a: **{revealedAssignment}**
        </p>
      )}
    </div>
  );
};

export default RevealResult;