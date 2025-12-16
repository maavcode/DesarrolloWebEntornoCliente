import React from "react";
import { SecretSantaProvider } from "./context/SecretSantaContext";
import AddParticipantForm from "./components/AddParticipantForm";
import ParticipantsList from "./components/ParticipantsList";
import RevealResult from "./components/RevealResult";

function App() {
  return (
    <>
      <div className="bg-black text-white m-10 p-3 rounded-2xl min-h-100">
        <SecretSantaProvider>
          <h1 className="text-4xl font-bold">🎄 Sorteo del Amigo Invisible</h1>

          <AddParticipantForm />

          <ParticipantsList />

          <RevealResult />
        </SecretSantaProvider>
      </div>
    </>
  );
}

export default App;
