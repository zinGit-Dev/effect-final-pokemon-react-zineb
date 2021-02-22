import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CardMax(props) {
  const [pokemonDetail, setPokemonDetail]= useState({})
  const { pokedex } = props;
  const { id } = useParams();
  console.info("> id: ", id);
  console.info("> pokedex: ", pokedex);
  useEffect(()=>{
    const poke= pokedex.find((p)=>p.id === Number(id))
    console.log("poke=>",poke)
    setPokemonDetail(poke)
  },[pokemonDetail])
 
  return (
    <div>
     {pokemonDetail?
        <div className="cardMax">
          <div>
            <img src={pokemonDetail.picture} alt={pokemonDetail.name} />
          </div>
          <p>n:{pokemonDetail.id}</p>
          <div> {pokemonDetail.name}</div>
          <div className="pokeType">
            <div className="classType">{pokemonDetail.type1}</div>
            <div className="classType">{pokemonDetail.type2}</div>
          </div>
        </div>
     : null}
    </div>
  );
}
