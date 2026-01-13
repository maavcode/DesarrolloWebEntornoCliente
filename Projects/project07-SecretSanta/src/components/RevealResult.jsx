import React, { useState } from "react";
import { useSecretSanta } from "../context/SecretSantaContext";

const RevealResult = () => {
  const { state, dispatch } = useSecretSanta();
  const { participants, assignments, isDrawn } = state;

  const [selectedPerson, setSelectedPerson] = useState("");
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
  
  const handleReset = () => {
    setRevealedAssignment(null);
    dispatch(
      {type:"RESET_ASSIGNMENTS"}
    );
  }

  return (
    <div>
      <div className="flex items-center w-full p-4 ">
        <h3 className="text-2xl font-semibold pr-10">
          👁️ Revelar tu Amigo Invisible
        </h3>

        <button onClick={handleReset} 
        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors">
          Nueva asignacion
        </button>
      </div>

      <p>Selecciona tu nombre para ver a quién le tienes que regalar.</p>

      <select className="text-white bg-black"
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
        style={{ marginLeft: "10px" }}
      >
        Mostrar Mi Asignación
      </button>

      {revealedAssignment && (
        <p style={{ fontWeight: "bold", fontSize: "1.2em", color: "darkred" }}>
          ¡Hola, {selectedPerson}! Tienes que regalar a: **{revealedAssignment}
          **
        </p>
      )}
    </div>
  );
};

export default RevealResult;
