import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import "./App.css";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";

import Button from "./Components/Button";
import Input from "./Components/Input";
import Label from "./Components/Label";
import Card from "./Components/Card";
import axios from "axios";
import UseDebounce from "./Components/UseDebounce";
import FormNewPokemon from "./Pages/Form/FormNewPokemon"
import Home from "./Components/Home"

function App() {
  const [name, setName] = useState("");

  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const toLower = (str) => str.toLowerCase().split(" ").join("");

  const isNOtDuplicated = (arr, input) => {
    return arr.filter((e) => input === e.name).length > 0 ? false : true;
  };
  function handleSubmitForm(newPoKemon) {
    console.log("new pokemons=>",newPoKemon)
    setList([...list,newPoKemon])
  }

  useEffect(() => {
    if (name && name.length >= 3) {
      const pokeName = toLower(name);
      const timer = setTimeout(() => {
        if (isNOtDuplicated(list, pokeName)) {
          axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
            .then((res) => {
              console.log(res);
              console.log("res.data=>", res.data);

              setList([
                ...list,
                {
                  name: res.data.name,
                  picture: res.data.sprites.front_default,
                  id: res.data.id,
                  type1: res.data.types[0].type.name,
                  type2:
                    res.data.types[1] && res.data.types[1].type.name
                      ? res.data.types[1].type.name
                      : "",
                },
              ]);
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
    <div className="App">
      <div>
        <h1>Pokémon Effect</h1>
      </div>
      <div className="centered">
        <div className="container">
          {list
            ? list.map((entry, index) => (
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
      <div>
        <FormNewPokemon  handleSubmitForm={handleSubmitForm}/>
      </div>
     
    </div>
  );
}

export default App;
