import React from "react";
import "./StatBar.scss";

const StatBar = (props) => {
    const { baseStat, statName } = props;
    const scaledStat = Math.ceil((baseStat * 100) / 250);
    return (
        <div className="bar-holder">
            <div className={`bar-filled bar-filled-${statName}`} style={{ width: `${scaledStat}%` }}>
                <span>{baseStat}</span>
            </div>
        </div>
    )
}

export default StatBar;