import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillPropertySafety } from "react-icons/ai";
import { PokemonCard } from "./PokemonCard";
import "../stylesheets/PokemonList.css";
import { useNavigate } from "react-router-dom";

async function fetchPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
async function fetchData() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
  );
  const data = await response.json();
  const newPokemonList = data.results;
  const pokemonData = await Promise.all(
    newPokemonList.map((pokemon) => fetchPokemon(pokemon.url))
  );
  return pokemonData;
}

export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData().then((data) => setPokemonList(data));
  }, []);

  return (
    <div className="contenedor-lista">
      {pokemonList.map((pokemon1) => (
        <div key={pokemon1.name}>
          <PokemonCard
            name={pokemon1.name}
            sprites={pokemon1.sprites}
            types={pokemon1.types}
            id={pokemon1.id}
            onClick={() =>
              navigate(`/pokemon/${pokemon1.id}`, {
                state: { name: pokemon1.name },
              })
            }
          />
        </div>
      ))}
    </div>
  );
};
