/* MALA PRACTICA
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}
*/
// BUENA PRACTICA
export default function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}