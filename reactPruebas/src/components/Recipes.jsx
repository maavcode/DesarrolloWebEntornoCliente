export default function Recipes({ drinkers1, drinkers2 }) {
  return (
    <>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={drinkers1} />
      <h2>For a gathering</h2>
      <Recipe drinkers={drinkers2} />
    </>
  );
}
function Recipe({ drinkers }) {
  return (
    <>
      <ol>
        <li>Boil {drinkers} cups of water.</li>
        <li>
          Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
        </li>
        <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
      </ol>
    </>
  );
}



