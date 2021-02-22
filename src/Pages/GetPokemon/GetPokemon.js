import { useState, useEffect } from "react";

import { v4 } from "uuid";
import Input from "../../Components/Input";
import Label from "../../Components/Label";
import Card from "../../Components/Card";
import axios from "axios";
import {toLower, isNOtDuplicated} from "../../Utils"


export default function GetPokemon(props){

    const { pokedex, addNewPokemonToList } = props
    const [name, setName] = useState("");

    const handleChange = (event) => {
      setName(event.target.value);
    };
  
    useEffect(() => {
      if (name && name.length >= 3) {
        const pokeName = toLower(name);
        const timer = setTimeout(() => {
          if (isNOtDuplicated(pokedex, pokeName)) {
            axios
              .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
              .then((res) => {
                console.log(res);
                console.log("res.data=>", res.data);
                addNewPokemonToList(res.data)
              })
              .catch((err) => {
                console.log(err);
                alert("este pokemon No existe!");
              });
          } else {
            alert("este pokemon ya lo tenemos!!");
          }
        }, 1500);
        return () => {
          clearTimeout(timer);
        };
      }
    }, [name]);
  return (
      <div>
    <div>
    <h1>Pokémon Effect</h1>
  </div>
  <div className="centered">
    <div className="container">
      {pokedex.length
        ? pokedex.map((entry, index) => (
            <Card
              key={v4()}
              name={entry.name}
              picture={entry.picture}
              id={entry.id}
              type1={entry.type1}
              type2={entry.type2}
            />
          ))
        : null}
    </div>
    <div className="dashboard">
      <Input className="input" value={name} onChange={handleChange} />
      <Label text={name} />
    </div>
  </div>
  </div>
  );
}