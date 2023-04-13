//import React, { useEffect } from "react";
import { useState } from "react";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/PokemonCard.css";

export const PokemonCard = (props) => {
  const [pokemon, setPokemon] = useState([]);

  return (
    props && (
      <div
        className={props.types && props.types[0].type.name + " card"}
        onClick={props.onClick}
      >
        <div className="container-img-number">
          <h2>#{props.id}</h2>
          <img
            src={props.sprites && props.sprites.front_default}
            className="card-img-top img-pokemon"
            alt="img-pokemon"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {props.name && props.name.toUpperCase()}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="">
          {props.types &&
            props.types.map((type) => (
              <span
                class="badge badge-pill badge-secondary"
                key={type.type.name}
              >
                {type.type.name}
              </span>
            ))}
        </ul>
      </div>
    )
  );
};
