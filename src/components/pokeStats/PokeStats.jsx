import React from "react";
import { StatBar } from "./../index";
import styles from "./PokeStats.module.scss";

const PokeStats = (props) => {
    const { baseStat, statName } = props;

    return (
        <div className={styles.cardStats}>
            <span>{statName}</span>
            <StatBar baseStat={baseStat} statName={statName}/>
        </div>
    );
}

export default PokeStats;