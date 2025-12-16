import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  participants: [], 
  assignments: {},  
  isDrawn: false,   
};

const secretSantaReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PARTICIPANT': // Gestiona el añadir un participante

      if (action.name && !state.participants.includes(action.name)) {
        return {
          ...state,
          participants: [...state.participants, action.name],

          isDrawn: false,
          assignments: {},
        };
      }
      return state;

    case 'REMOVE_PARTICIPANT': // Gestiona el eliminar un participate
      return {
        ...state,
        participants: state.participants.filter(p => p !== action.name),
        isDrawn: false,
        assignments: {},
      };

    case 'RUN_DRAW': // Gestiona el poner el personaje
      if (state.participants.length < 3) {
        alert("¡Necesitas al menos 3 participantes para el sorteo!");
        return state;
      }

      const buyers = [...state.participants];
      const receivers = [...state.participants];
      let newAssignments = {};
      let isSuccess = false;

      
      while (!isSuccess) {
      
        receivers.sort(() => Math.random() - 0.5); 
        newAssignments = {};
        isSuccess = true;

        for (let i = 0; i < buyers.length; i++) {
          const buyer = buyers[i];
          const receiver = receivers[i];

          
          if (buyer === receiver) {
            isSuccess = false; 
            break;
          }
          newAssignments[buyer] = receiver;
        }
      }

      return {
        ...state,
        assignments: newAssignments,
        isDrawn: true,
      };

      case 'RESET_ASIGNATIONS': // Gestiona el reseteo de las asignaciones
        return{
          ...state,
          isDrawn:false,
          assignments: {}
        }

      case 'RESET_PARTICIPANTS':
        return{
          initialState,
        }

      default:
      return state;
  }
  
};


export const SecretSantaContext = createContext();


export const SecretSantaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(secretSantaReducer, initialState);

  return (
    <SecretSantaContext.Provider value={{ state, dispatch }}>
      {children}
    </SecretSantaContext.Provider>
  );
};


export const useSecretSanta = () => {
  return useContext(SecretSantaContext);
};