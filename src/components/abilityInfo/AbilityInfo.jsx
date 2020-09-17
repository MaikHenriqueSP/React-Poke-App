import React from "react";
import { firstLetterToUpperCase } from "./../../util/util";
import styles from "./AbilityInfo.module.scss";

const AbilityInfo = ({ abilityName, abilityDescription }) => {
    const abilityNameFirstLetterUpperCased = firstLetterToUpperCase(abilityName);
    return (
        <div className={styles.abilityContainer}>
            <h3>{abilityNameFirstLetterUpperCased}</h3>
            <p>{abilityDescription}</p>
        </div>
    );
};

export default AbilityInfo;