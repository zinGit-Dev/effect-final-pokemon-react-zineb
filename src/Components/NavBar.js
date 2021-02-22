import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/getPokemon">Get Pokemon</Link>
      <Link to="/form">Create New Pokemon</Link>
      <Link to="/pokemon/:id">Get pokemon by id</Link>
    </div>
  );
}
