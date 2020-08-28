import React from "react";
import styles from "./PokemonCard.module.scss";
import { PokeStats } from "./../index";

const PokemonCard = ({ pokeName, pokeStats, pokePictureUrl }) => {
    const pokeNameFirstLetterUpperCase = pokeName.charAt(0).toUpperCase()
        + pokeName.substring(1, pokeName.length);
    return (
        <div className={styles.cardContainer}>
            <img src={pokePictureUrl} alt={`Representation of ${pokeName}`} />
            <h4>{pokeNameFirstLetterUpperCase}</h4>
            <div className={styles.cardStatsContainer}>
                {pokeStats.map((stats) => (
                    <PokeStats key={stats.stat.name} baseStat={stats.base_stat} statName={stats.stat.name} />
                ))}
            </div>
        </div>
    );

}

export default PokemonCard;