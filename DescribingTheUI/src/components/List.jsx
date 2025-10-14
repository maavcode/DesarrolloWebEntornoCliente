import { people } from "../data/people";
import { getImageUrl } from "../functions/getImageUrl";

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return(
    <>
        <h1>List</h1>
        <ul>{listItems}</ul>
    </>
  ) 
}