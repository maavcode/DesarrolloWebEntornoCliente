import React, { useState } from 'react';
import { useSecretSanta } from '../context/SecretSantaContext';

const AddParticipantForm = () => {
  
  const [name, setName] = useState('');
  const { dispatch } = useSecretSanta();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch({ type: 'ADD_PARTICIPANT', name: name.trim() });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del participante"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Añadir Participante</button>
    </form>
  );
};

export default AddParticipantForm;