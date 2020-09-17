import React from "react";
// import styles from "./../pokemonPage/PokemonPage.module.scss";
import styles from "./StrengthInfo.module.scss";
import { Type } from "./../index";

const StrengthInfo = ({ strengthAgainst, strengthType }) => {
    return (
        <div className={styles.strengthWrapper}>
            {strengthAgainst && strengthAgainst.length !== 0 ?
                strengthAgainst.map(agaisntType => (<Type key={agaisntType} typeName={agaisntType} />))
                : (<p>This pokemon is not naturally {strengthType} agaisnt any type.</p>)}
        </div>
    );
}

export default StrengthInfo;