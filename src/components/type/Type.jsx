import React from "react";

import useTypeIcon from "./../../hooks/useTypeIcon";
import "./Type.scss";
import { firstLetterToUpperCase } from "./../../util/util";

const Type = ({ typeName }) => {
    const iconUrl = useTypeIcon(typeName);
    return (
        <div className="poketype-container">
            <div className={`icon ${typeName}`}>
                <img src={iconUrl} alt={`Pokémon Type: ${typeName}`} />
            </div>
            <h4>{firstLetterToUpperCase(typeName)}</h4>
        </div>
    );
};

export default Type;