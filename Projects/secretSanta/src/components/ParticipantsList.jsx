import React from 'react';
import { useSecretSanta } from '../context/SecretSantaContext';

const ParticipantsList = () => {

  const { state, dispatch } = useSecretSanta();
  const { participants, isDrawn } = state;

  const handleRemove = (name) => {
    dispatch({ type: 'REMOVE_PARTICIPANT', name: name });
  };

  const handleRunDraw = () => {
    dispatch({ type: 'RUN_DRAW' });
  };

  return (
    <div>
      <h3>Lista de Participantes ({participants.length})</h3>
    
      <ul>
        {participants.map((name, index) => (
          <li key={index}>
            {name}
            {!isDrawn && ( 
              <button onClick={() => handleRemove(name)} style={{ marginLeft: '10px' }}>
                Eliminar
              </button>
            )}
          </li>
        ))}
      </ul>
      
      {participants.length >= 3 && !isDrawn && (
        <button onClick={handleRunDraw}>
          🎉 ¡Realizar Sorteo del Amigo Invisible!
        </button>
      )}
      
      {isDrawn && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          ¡Sorteo realizado con éxito! Por favor, revisa tu asignación más abajo.
        </p>
      )}
    </div>
  );
};

export default ParticipantsList;