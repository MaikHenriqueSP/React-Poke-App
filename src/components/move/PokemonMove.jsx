import React from "react";
import { StatBar } from "./../index";
import styles from "./../pokemonPage/PokemonPage.module.scss";

const PokemonMove = ({ moveAccuracy, movePower, moveName, moveDescription }) => {
    if (!moveAccuracy || !movePower || !moveName || !moveDescription) {
        return null;
    }
    return (
        <div>
            <div className={styles.movesMoveContainer}>
                <h3>{moveName}</h3>
                <p>{moveDescription}</p>
                <div className={styles.movesMoveStatsBarContainer}>
                    <div className={styles.movesMoveStatsBar}>
                        <p>Power</p>
                        <StatBar baseStat={movePower} statName={"power"} maxValueAvailable={120} />
                    </div>
                    <div className={styles.movesMoveStatsBar}>
                        <p>Accuracy</p>
                        <StatBar baseStat={`${moveAccuracy}%`} statName={"accuracy"} maxValueAvailable={100} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonMove;