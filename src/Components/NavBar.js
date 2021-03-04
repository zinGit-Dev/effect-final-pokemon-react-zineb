import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <span><Link to="/home">Home</Link></span>
      <span><Link to="/getPokemon">GetPokemon</Link></span>
      <span><Link to="/form">CreateNewPokemon</Link></span>
      <span><Link to="/pokemon/:id">PokemonDetails</Link></span>
    
    </div>
  );
}
