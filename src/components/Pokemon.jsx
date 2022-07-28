import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data));
  }, []);

  const moves = pokemon.moves;
  console.log(moves);
  console.log(pokemon);

  return (
    <div className="container-pokemon">
      <div className="title-pokemonItem">
        <img src="https://i.ibb.co/MfR394S/165f659fbdab9f3c143d50c1f172310c.png" />
        <Link to={"/pokedext/"} className="fa-solid fa-arrow-left-long  arrow"><span>  &nbsp; &nbsp;  previous</span>
          
        </Link>
      </div>
     
      <div className="pokemon-container">
        <div className="pokemon">
          <h1 className="title-pokemon">{pokemon.name}</h1>
          <div>
            <img
              className="avatar-pokemon"
              src={pokemon.sprites?.other.dream_world.front_default}
              alt=""
            />
          </div>
          <div className="description-pokemon">
            <h2>Height: {pokemon?.height}</h2>
            <br />
            <h2>Weight: {pokemon?.weight}</h2>
            <br />
            <h2>Type: {pokemon?.types?.[0].type.name}</h2>
            <br />
            <h2>Type: {pokemon?.types?.[1]?.type.name}</h2>
            <br />
            <h2>Abilities: {pokemon?.abilities?.[0].ability.name}</h2>
            <br />
            <h2>Abilities: {pokemon?.abilities?.[1].ability.name}</h2>
            <br />
          </div>
        </div>
        <div className="moves">
          <h2 className="title-moves">Movimientos</h2>
          <ol className="moves-list">
            {moves?.map((move) => (
              <li key={move.move.name}>
                <h3>  &nbsp; &nbsp; {move.move.name}</h3>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
