import React from "react";
import styles from "./../pokemonPage/PokemonPage.module.scss";
import useTypeIcon from "./../../hooks/useTypeIcon";
const Type = ({ typeName }) => {
    const iconUrl = useTypeIcon(typeName);

    return (
        <div className={styles.pokeType}>
            <div>
                <img src={iconUrl} alt={`Type of pokemon: ${typeName}`} />
                <h4>{typeName}</h4>
            </div>
        </div>
    );

};

export default Type;