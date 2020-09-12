import React from "react";
// import styles from "./../pokemonPage/PokemonPage.module.scss";
import useTypeIcon from "./../../hooks/useTypeIcon";
import "./Type.scss";

const Type = ({ typeName }) => {
    const iconUrl = useTypeIcon(typeName);

    return (
        <div className="poketype-container">
            <div className={`icon ${typeName}`}>
                <img src={iconUrl} alt={`Type of pokemon: ${typeName}`} />
            </div>
            <h4>{typeName}</h4>
        </div>
    );

};

export default Type;