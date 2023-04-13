import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/PokemonCard.css";
import "../stylesheets/PokemonDetails.css";
import { useNavigate } from "react-router-dom";
import { Button } from "bootstrap";

async function fetchDetails(info) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${info}`);
  const data = await response.json();
  return {
    details: {
      name: data.name,
      height: data.height,
      weight: data.weight,
      type: data.types[0].type.name,
      sprites: data.sprites.front_default,
    },
    abilities: data.moves,
  };
}

export const PokemonDetails = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const infoName = location.state.name;
  const [pokemonDetails, setPokemonDetails] = useState({
    details: {},
    abilities: [],
  });
  useEffect(() => {
    fetchDetails(infoName).then((detailsData) => {
      console.log(detailsData);
      setPokemonDetails(detailsData);
    });
  }, []);

  const { details, abilities } = pokemonDetails;
  return (
    details && (
      <div className={details.type + " main-container"}>
        <button
          className={"btn btn-outline-light"}
          onClick={() => navigate(-1)}
        >
          Back home
        </button>
        <div className={details.type + " header-container"}>
          <img src={details.sprites} className={"sprites"}></img>
          <h1>{details.name && details.name.toUpperCase()}</h1>
        </div>
        <ul className="list-group">
          {abilities.map((ability) => (
            <li className="list-group-item" key={ability.move.name}>
              {ability.move.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
