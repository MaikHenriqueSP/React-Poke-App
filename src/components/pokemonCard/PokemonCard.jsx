import React, { Component } from "react";
import styles from "./PokemonCard.module.scss";
import { PokeStats } from "./../index";
import { firstLetterToUpperCase } from "./../../util/util";

class PokemonCard extends Component {
    render() {
        const { pokeName, pokeStats, pokePictureUrl } = this.props;
        if (!pokeName) { return null; }
        const pokeNameFirstLetterUpperCased = firstLetterToUpperCase(pokeName);
        return (
            <div className={styles.cardContainer}>
                <img src={pokePictureUrl} alt={`Representation of ${pokeName}`} />
                <h4>{pokeNameFirstLetterUpperCased}</h4>
                <div className={styles.cardStatsContainer}>
                    {pokeStats.map((stats) => (
                        <PokeStats key={stats.stat.name} baseStat={stats.base_stat} statName={stats.stat.name} maxValueAvailable={255} />
                    ))}
                </div>
            </div>
        );
    }
}

export default PokemonCard;