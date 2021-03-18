import { useState } from "react";
import { useForm } from "react-hook-form";
import { Route, Redirect,Switch} from "react-router-dom";
import FormNewPokemon from "./Pages/Form/FormNewPokemon";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

import GetPokemon from "./Pages/GetPokemon/GetPokemon";
import "./App.css";
import CardMax from "./Components/CardMax";

function App() {
    const [list, setList] = useState([]);
    const [pokedex, setPokedex] = useState([])
  function handleSubmitForm(newPoKemon) {
    console.log("new pokemons=>", newPoKemon);
    setList([...list, newPoKemon]);
  }

  const addNewPokemonToList = pokemon => {
    setPokedex([
      ...pokedex,
      {
        name: pokemon.name,
        picture: pokemon.sprites.front_default,
        id: pokemon.id,
        type1: pokemon.types[0].type.name,
        type2:
          pokemon.types[1] && pokemon.types[1].type.name
            ? pokemon.types[1].type.name
            : "",
      },
    ])
  }

  return (
    <div className="App">
    
      <NavBar />
      
      
      <div>
        <Switch>

          <Route exact path="/home">
            {/* <Home /> */}
          </Route>

          <Route exact path="/getPokemon">
            <GetPokemon pokedex={pokedex} addNewPokemonToList={addNewPokemonToList}/>
          </Route>

          <Route exact path="/form">
            <FormNewPokemon handleSubmitForm={handleSubmitForm} />
          </Route>

          <Route exact path="/pokemon/:id">
            <CardMax pokedex={pokedex} />
          </Route>

          <Redirect to="/home" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
