import React from "react";
import "./StatBar.scss";

const StatBar = (props) => {
    const { baseStat, statName } = props;
    return (
        <div className="bar-holder">
            <div className={`bar-filled bar-filled-${statName}`} style={{ width: `${baseStat}%` }}>
                <span>{baseStat}</span>
            </div>
        </div>
    )
}

export default StatBar;