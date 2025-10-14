function Item1({ name, isPacked }) { // Example 1
  //if (isPacked) {
  //  return <li className="item">{name} ✅</li>;
  //  //return null; // Hace que desaparezca el li
  //} else
  //  return <li className="item">{name}</li>;

  //return (
  //  <>
  //    <li className="item">{isPacked ? name + "✅" : name}</li>
  //  </>
  //);

  //return(
  //  <>
  //      <li>
  //          {name} {isPacked && '✅'}
  //      </li>
  //  </>
  //)

  return(
    <>
        <li>
            {name} {isPacked ? '✅' : '❌'}
        </li>
    </>
  )
}
function Item2({ name, isPacked }) { // Example 2
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name + ' ❌'
      )}
    </li>
  );
}

function Item3({ name, isPacked }) {
  let itemContent = name + (isPacked ? " ✅" : " ❌");
  
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item1 isPacked={true} name="Space suit" />
        <Item2 isPacked={true} name="Helmet with a golden leaf" />
        <Item2 isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
