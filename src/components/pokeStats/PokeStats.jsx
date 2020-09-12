import React from "react";
import { StatBar } from "./../index";
import styles from "./PokeStats.module.scss";

const PokeStats = (props) => {
    const { baseStat, statName, maxValueAvailable } = props;

    return (
        <div className={styles.cardStats}>
            <span>{statName}</span>
            <StatBar baseStat={baseStat} statName={statName} maxValueAvailable={maxValueAvailable} />
        </div>
    );
}

export default PokeStats;