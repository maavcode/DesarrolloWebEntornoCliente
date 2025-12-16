import React from 'react';
import { SecretSantaProvider } from './context/SecretSantaContext';
import AddParticipantForm from './components/AddParticipantForm';
import ParticipantsList from './components/ParticipantsList';
import RevealResult from './components/RevealResult';

function App() {
  return (
    // Envolvemos toda la aplicación en el Provider para que todos los hijos accedan al Context
    <SecretSantaProvider>
      <h1 className="text-3xl">🎄 Sorteo del Amigo Invisible</h1>
      
      <AddParticipantForm />
      
      <ParticipantsList />
      
      <RevealResult />
    </SecretSantaProvider>
  );
}

export default App;