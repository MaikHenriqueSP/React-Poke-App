import React from "react";
import { StatBar } from "./../index";
import styles from "./PokeStats.module.scss";
import { firstLetterToUpperCase } from "./../../util/util";

const PokeStats = (props) => {
    const { baseStat, statName, maxValueAvailable } = props;
    const statNameFirstLetterUpperCased = firstLetterToUpperCase(statName);

    return (
        <div className={styles.cardStats}>
            <span>{statNameFirstLetterUpperCased}</span>
            <StatBar baseStat={baseStat} statName={statName} maxValueAvailable={maxValueAvailable} />
        </div>
    );
}

export default PokeStats;