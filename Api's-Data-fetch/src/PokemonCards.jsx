import React from "react";

export default function PokemonCards({pokemonCardsData}) {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          className="pokemon-image"
          src={pokemonCardsData.sprites.other.dream_world.front_default}
          alt={pokemonCardsData.name}
        />
      </figure>
      <h1 className="pokemon-name">{pokemonCardsData.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonCardsData.types.map((CurrType) => CurrType.type.name).join(", ")
          }
        </p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
            <span>Height: </span>{pokemonCardsData.height}
        </p>
        <p className="pokemon-info">
            <span>Weight: </span>{pokemonCardsData.weight}
        </p>
        <p className="pokemon-info">
            <span>Speed: </span>{pokemonCardsData.stats[5].base_stat}
        </p>
       
      </div>


      <div className="grid-three-cols">
        <div className="pokemon-info">
        <p>{pokemonCardsData.base_experience}</p>
            <span>Experience: </span>
        </div>
       
        <div className="pokemon-info">
        <p>{pokemonCardsData.stats[1].base_stat}</p>
            <span>Experience: </span>
        </div>

        <div className="pokemon-info">
        <p>{pokemonCardsData.abilities.map((abilityInfo)=> abilityInfo.ability.name).slice(0,1).join(", ")}</p>
            <span>Attack: </span>
        </div>
       
      </div>
    </li>
  );
}
