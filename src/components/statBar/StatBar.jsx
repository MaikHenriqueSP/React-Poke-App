import React from "react";
import "./StatBar.scss";

const StatBar = (props) => {
    const a = `${"barFilled-attack"}`;
    const { baseStat } = props;
    return (
        <div className="bar-holder">
            <div className="bar-filled bar-filled-defense" style={{width: `${baseStat}%`}}>
            <span>{baseStat}</span>
            </div>
        </div>
    )
}

export default StatBar;