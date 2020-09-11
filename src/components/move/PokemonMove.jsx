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
                        <StatBar baseStat={movePower} statName={"power"} />
                    </div>
                    <div className={styles.movesMoveStatsBar}>
                        <p>Accuracy</p>
                        <StatBar baseStat={moveAccuracy} statName={"accuracy"} />
                    </div>
                </div>
            </div>


        </div>
    );

};

export default PokemonMove;

{/* <div className={styles.movesMoveContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eaque, neque iure animi qui sunt!</p>
                        <div className={styles.movesMoveStatsBarContainer}>
                            <div className={styles.movesMoveStatsBar}>
                                <p>Power</p>
                                <StatBar baseStat={100} statName={"power"} />
                            </div>
                            <div className={styles.movesMoveStatsBar}>
                                <p>Accuracy</p>
                                <StatBar baseStat={100} statName={"accuracy"} />
                            </div>
                        </div>
                    </div> */}