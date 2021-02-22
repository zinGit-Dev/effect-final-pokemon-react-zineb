import { useState, useEffect } from "react";
import "./App.css";
import { v4 } from "uuid";

import Button from "./Components/Button";
import Input from "./Components/Input";
import Label from "./Components/Label";
import Card from "./Components/Card";
import axios from "axios";
import UseDebounce from "./Components/UseDebounce";

function App() {
  const [name, setName] = useState("");
  const [nameFromButtonClick, setNameFromButtonClick] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    picture: "",
    id: 0,
    type1: "",
    // type2:  "" ,
  });
  const [list, setList] = useState([]);

  //  const debounce = UseDebounce()


  const handleChange = (event) => {
    const text = event.target.value;

    // debounce(()=>setName(text),1000)

    // useEffect(() => {
    //   const timer = setTimeout(() =>  setName(text), 2000);
    //   return () => clearTimeout(timer);
    // }, []);
    <UseDebounce fn={setName(text)} wait={1000} />
    

    setList([...list, pokemon]);
  };

  // const handleChange = (event) => {
  //     setName(event.target.value);
  //   setList([...list, pokemon]);
  // };

  // const handleClick = () => {
  //   setNameFromButtonClick(name);
  //   setList([...list, pokemon]);
  // };

  useEffect(() => {
      if(name){
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((res) => {
          console.log(res);
          console.log("res.data=>", res.data);
          
          setPokemon({
            name: res.data.name,
            picture: res.data.sprites.front_default,
            id: res.data.id,
            type1: res.data.types[0].type.name,
            // type2: undefined  ? "" : res.data.types[1].type.name,
            //type2: res.data.types[1].type.name == undefined ? "" : res.data.types[1].type.name
          });
        })
        .catch((err) => {
          console.log(err);
        });
      }
   
  }, [name]);

  return (
    <div className="App">
      <div>
        <h1>Pokémon Effect</h1>
      </div>
      <div className="centered">
        <div className="container">
          {list.map((entry, index) => (
            <Card
              key={v4()}
              name={entry.name}
              picture={entry.picture}
              id={entry.id}
              type1={entry.type1}
              //type2={entry.type2}
            />
          ))}
        </div>
        <div className="dashboard">
          <Input className="input" value={name} onChange={handleChange} />
          {/* <Button
            className="getPokemon"
            text="GetPokemon"
            onClick={handleClick}
          /> */}
          <Label text={name} />
        </div>
      </div>
    </div>
  );
}

export default App;