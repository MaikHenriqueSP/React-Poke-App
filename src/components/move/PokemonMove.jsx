import React from "react";
import { StatBar } from "./../index";
import styles from "./PokemonMove.module.scss";
import { firstLetterToUpperCase } from "./../../util/util";

const PokemonMove = ({ moveAccuracy, movePower, moveName, moveDescription }) => {
    if (!moveAccuracy || !movePower || !moveName || !moveDescription) {
        return null;
    }
    const moveNameFirstLetterUppercased = firstLetterToUpperCase(moveName);
    return (
        <div className={styles.moveContainer}>
            <div className={styles.movesMoveContainer}>
                <h3>{moveNameFirstLetterUppercased}</h3>
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