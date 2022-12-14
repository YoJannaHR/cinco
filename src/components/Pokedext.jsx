import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterItem from "./CharacterItem";
import { Link } from "react-router-dom";

const Pokedext = () => {
  const user = useSelector((state) => state.user);
  const [characters, setCharacters] = useState([]);
  const [characterSearch, setcharacterSearch] = useState("");
  const [typesPokemon, setTypesPokemon] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // const random = Math.floor(Math.random() * 20) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1154/`)
      .then((res) => setCharacters(res.data.results));

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setTypesPokemon(res.data.results));
  }, []);

  // console.log(typesPokemon);

  const search = (e) => {
    e.preventDefault();

    navigate(`/pokedext/${characterSearch}`);
  };

  const typePokemon = (e) => {
    // alert("se seleciono un tipo " + e.target.value);

      
    axios
    .get( e.target.value)
    .then((res) => setCharacters(res.data.pokemon));
  
  };
  // console.log(characters)

  
  const [page, setPage] = useState(1);
  const lastIndex = page * 20;
  const firstIndex = lastIndex - 20;
  const pokemonsPaginated = characters.slice(firstIndex, lastIndex);

  const lastPage = Math.ceil(characters.length / 20);

  const numbers = []; // [1, 2, 3, 4]
  for (let i = 1; i <= lastPage; i++) {
    numbers.push(i);
  }


  return (
    <div className="pokedext">
      <div className="title-pokedext">
        <img src="https://i.ibb.co/kDxBmXL/2c6d4724d09eae771dfae334e0a2f9c3.png" alt="" /> 
        <Link to={"/"} className="fa-solid fa-arrow-left-long  arrow"> <span>  &nbsp; &nbsp;  previous</span></Link>
      
      </div>
      <div className="welcome">
       
      

        <p>Welcom {user}, where you can find your favorite Pokemon </p>

        <form className="form-seach-pokedex" onSubmit={search}>
          <input
            className="input-user"
            value={characterSearch}
            onChange={(e) => setcharacterSearch(e.target.value)}
            type="text"
          />
          <button className="button-search">Search</button>
        </form>
        <select className="select-pokedex" onChange={typePokemon}>
          {/* <option>Select Type</option> */}
          {typesPokemon?.map((typePokemon) => (
            <option value={typePokemon.url} key={typePokemon.url}>
              {typePokemon.name}
            </option>
          ))}
        </select>
      </div>
  
      <div className="container-card">
        {pokemonsPaginated.map((character) => (
          <CharacterItem
            key={character.url ? character.url : character.pokemon.url}
            characterUrl={character.url ? character.url : character.pokemon.url}
          />
        ))}
      </div>
      <div className="pagination-buttons">

      <button className="button-pagination" onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev page
        </button>
      {
        numbers.map(number =>(
         <button className="buttons-pg" onClick={() => setPage(number)} key={number}>{number}</button>
        ))
      }
       <button className="button-pagination" onClick={() => setPage(page + 1)} disabled={page === lastPage}>
          Next Page
        </button>

      </div>
   
    </div>
  );
};

export default Pokedext;
