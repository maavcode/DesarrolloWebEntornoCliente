export default function RespondingToEvents() {
    return(
    <>
        <h1>1 - Responding To Events</h1>
        <ButtonDoNothing />
        <ButtonDoSomething />
    </>
    )
}

function ButtonDoNothing() {
    return (
    <button>
      I don't do anything
    </button>
  );
}

function ButtonDoSomething() {
    function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}