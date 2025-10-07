import Cup from "./Cup";

export default function TeaGathering() {
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return (
    <>
      <h1>Tea Gathering</h1>
      {cups}
    </>
  );
}
