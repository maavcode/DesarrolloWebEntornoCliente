import { getImageUrl } from "../functions/getImageUrl";


export default function Avatar({person, size = "s"}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt= {person.name}
      width={size}
      height={size}
    />
  );
}

