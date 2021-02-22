import { Link } from "react-router-dom";

export default function Card(props) {
  const { name, picture, id, type1, type2 } = props;
  return (
    <Link to={`/pokemon/${id}`}>
      <div className="card">
        <div>
          <img src={picture} alt={name} />
        </div>
        <p>n:{id}</p>
        <div> {name}</div>
        <div className="pokeType">
          <div className="classType">{type1}</div>
          <div className="classType">{type2}</div>
        </div>
      </div>
    </Link>
  );
}
