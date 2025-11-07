import { useState } from 'react';
import CorrectPlus3 from '../components/CorrectPlus3';
import MorePlus from '../components/MorePlus';

export default function StateAComponentMemory() {
  
  return (
    <>
    <h1>4 - State: A Component Memory</h1>
      <div>
        <h2>Correct Plus3</h2>
        <CorrectPlus3 />
      </div>
      <div>
        <h2>More Plus</h2>
        <MorePlus />
      </div>
    </>
  );
}

