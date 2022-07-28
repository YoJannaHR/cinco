import React, { useEffect, useState } from 'react';
import { useNavigate} from "react-router-dom";
import axios  from 'axios';

const CharacterItem = ({characterUrl}) => {

    const [character, setCharacter] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
 
        axios.get(characterUrl)
          .then (res=>setCharacter(res.data))

    },[])

    // console.log(character)

    return (
        <div className='card_pokemon' onClick={()=>navigate(`/pokedext/${character.id}`)}>
            <h3>Nombre: {character.name}</h3>
            <div className="avatar">
            <img src={character.sprites?.other.dream_world.front_default} alt="" />
            </div>
            <h3>Type: {character.types?.[0].type.name} </h3>
         
            <h3>Attack: {character.stats?.[1].base_stat} </h3>
            <h3>Defense: {character.stats?.[2].base_stat} </h3>
            {/* <h3>Defense:{character.stats[1].stat.name} </h3> */}
        </div>
    );
};

export default CharacterItem;