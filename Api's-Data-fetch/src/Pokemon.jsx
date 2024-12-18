import React, { useEffect, useState } from "react";
import "./Pokemon.css";
import PokemonCards from "./PokemonCards";
export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=28";

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();

      const detailedPokemonData = data.results.map(async (currPokemon) => {
        const response = await fetch(currPokemon.url);
        const data = await response.json();
        return data;
      });
      // console.log(detailedPokemonData)

      const detailResponse = await Promise.all(detailedPokemonData);
      // console.log(detailResponse);
      setPokemonData(detailResponse);
      setLoading(false);

      setLoading(false);
    } catch (error) {
      // console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  // search functionality
  const searchData = pokemonData.filter((CurrSearch) =>
    CurrSearch.name.toLowerCase().includes(search.toLowerCase())
  );

  // if Loading
  if (loading)
    return (
      <div>
        <h1>Loading ....</h1>
      </div>
    );

  // If Error
  if (error)
    return (
      <div>
        {" "}
        <h1>{error.message}</h1>
      </div>
    );

  return (
    <>
      <section className="container">
        <header>
          <h1>Let's Catch Pokemon Card</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search here ..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {/* {pokemonData.map((currPokemon) => {  if use search functionality */}
            {searchData.map((currPokemon) => {
              return (
                <PokemonCards
                  key={pokemonData.id}
                  pokemonCardsData={currPokemon}
                />
              );
            })}
          </ul>
        </div>
      </section>

      <ul></ul>
    </>
  );
}
