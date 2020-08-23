import React from "react";
import styles from "./PokemonCard.module.scss";
import { StatBar } from "./../index";

const PokemonCard = ({ pokeName, pokeStats, pokePictureUrl }) => {
    const pokeNameFirstLetterUpperCase = pokeName.charAt(0).toUpperCase()
        + pokeName.substring(1, pokeName.length);
    return (
        <div className={styles.cardContainer}>
            <img src={pokePictureUrl} alt={`Representation of ${pokeName}`} />
            <h4>{pokeNameFirstLetterUpperCase}</h4>
            {/* #TODO CREATE STATS COMPONENT */}
            <div className={styles.cardStatsContainer}>
                <p>
                    {/* {pokeStats[0].stat.name} {pokeStats[0].base_stat} <StatBar /> */}
                    {pokeStats[0].stat.name} <StatBar baseStat={pokeStats[0].base_stat} />
                </p>
                <p>
                    {/* {pokeStats[1].stat.name} {pokeStats[1].base_stat} <StatBar /> */}
                    {pokeStats[1].stat.name} <StatBar baseStat={pokeStats[1].base_stat} />
                </p>
                <p>
                    {/* {pokeStats[2].stat.name} {pokeStats[2].base_stat} <StatBar /> */}
                    {pokeStats[2].stat.name} <StatBar baseStat={pokeStats[2].base_stat} />
                </p>
                <p>
                    {/* {pokeStats[3].stat.name} {pokeStats[3].base_stat} <StatBar /> */}
                    {pokeStats[3].stat.name}<StatBar baseStat={pokeStats[3].base_stat} />
                </p>
                <p>
                    {/* {pokeStats[4].stat.name} {pokeStats[4].base_stat} <StatBar /> */}
                    {pokeStats[4].stat.name}<StatBar baseStat={pokeStats[4].base_stat} />
                </p>
                <p>
                    {/* {pokeStats[5].stat.name} {pokeStats[5].base_stat} <StatBar /> */}
                    {pokeStats[5].stat.name} <StatBar baseStat={pokeStats[5].base_stat} />
                </p>
            </div>
        </div>
    );

}

export default PokemonCard;