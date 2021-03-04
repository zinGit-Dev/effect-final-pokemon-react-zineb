import { useState, useEffect } from "react";
import "./App.css";
import { v4 } from "uuid";

import Button from "../src/Components/Button";
import Input from "../src/Components/Input";
import Label from "../src/Components/Label";
import Card from "../src/Components/Card";
import axios from "axios";
import UseDebounce from "../src/Components/UseDebounce";

function App() {
  const [name, setName] = useState("");
  
//   const [pokemon, setPokemon] = useState({
//     name: "",
//     picture: "",
//     id: 0,
//     type1: "",
//     // type2:  "" ,
//   });
  const [list, setList] = useState([]);

   const handleChange = (event) => {
      setName(event.target.value);
    
  };
  const toLower = (str) => str.toLowerCase().split(" ").join("")

  const incl = (s, arg) => s.includes(arg);

  const isNOtDuplicated=(arr, input)=>{
    //console.log("filter=>",arr.filter((e)=>input === e.name)? false: true)
    return arr.filter((e)=>input === e.name).length >0 ? false: true }

  useEffect(() => {

      if(name && name.length>=3){
       const pokeName =toLower(name)
      const timer=  setTimeout(() => {
        if(isNOtDuplicated(list,pokeName)){
          axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
          .then((res) => {
            console.log(res);
            console.log("res.data=>", res.data);
            
            setList([...list, {
              name: res.data.name,
              picture: res.data.sprites.front_default,
              id: res.data.id,
              type1: res.data.types[0].type.name,
              type2: res.data.types[1] && res.data.types[1].type.name ? res.data.types[1].type.name:""
              
            }]);
          })
          .catch((err) => {
            console.log(err);
            alert("este pokemon No existe!")
          });
        }
          else{
            alert("este pokemon ya lo tenemos!!")
          }
        }, 2000);
        
       return(()=>{clearTimeout(timer)})
      }
   
  }, [name]);

  return (
    <div className="App">
      <div>
        <h1>Pokémon Effect</h1>
      </div>
      <div className="centered">
        <div className="container">

          {list? list.map((entry, index) => (
            <Card
              key={v4()}
              name={entry.name}
              picture={entry.picture}
              id={entry.id}
              type1={entry.type1}
              type2={entry.type2}
            />
          )): null}
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