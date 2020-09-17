import React from "react";
import { PokemonMove, Type, StrengthInfo, AbilityInfo } from "./../index";
import styles from "./PokemonPage.module.scss";
import useIndividualData from "./../../hooks/useIndividualData";
import { firstLetterToUpperCase } from "./../../util/util";

const PokemonPage = (props) => {
    const { location: { state: { front_default, name } } } = props;
    const { generalInfo, speciesInfo } = useIndividualData(name);
    const { capture_rate, color_name, evolutionChain, speciesDescription } = speciesInfo;
    const { abilityInfo, weight, height, movesInfo, strengthsInfo, pokeOwnTypes } = generalInfo;
    const { strongAgainst, weakAgainst, neutralAgainst } = strengthsInfo || {};

    // console.log(abilityInfo);
    return (
        <section className={styles.pokePageSection}>
            <div className={styles.pokePageContainer}>
                <article className={styles.profile}>
                    <div className={styles.profileAvatarContainer}>
                        <div className={styles.profileAvatar}>
                            <img src={front_default} alt="Pokémon Profile" />
                        </div>
                        <h3>{firstLetterToUpperCase(name)}</h3>
                    </div>
                    <div className={styles.basicInfoContainer}>
                        <div className={styles.basicInfoDescription}>
                            <h2>Description</h2>
                            <p>{speciesDescription}</p>
                        </div>
                        <div className={styles.basicInfoEvolutionChain}>
                            <h2>Evolution Chain</h2>
                            <p>{evolutionChain && evolutionChain.map((evolutionName, index) => {
                                const evolutionNameChanged = firstLetterToUpperCase(evolutionName);

                                return index !== evolutionChain.length - 1 ?
                                    (<span key={evolutionName}>{evolutionNameChanged} {' => '} </span>) :
                                    (<span key={evolutionName}>{evolutionNameChanged}.</span>)
                            })}
                            </p>
                        </div>
                        <div className="pokeType">
                            <h2>Type(s)</h2>
                            {pokeOwnTypes && pokeOwnTypes.map(pokeOwnType => (<Type key={pokeOwnType} typeName={pokeOwnType} />))}
                        </div>
                    </div>
                </article>
                <hr />
                <article className={styles.strengths}>
                    <div className={styles.strengthsContainer}>
                        <div className={styles.strengthAgainst}>
                            <h2>Strong Against</h2>
                            {strongAgainst && <StrengthInfo strengthAgainst={strongAgainst} strengthType={"strong"} />}
                        </div>
                        <div className={styles.strengthAgainst}>
                            <h2>Weak Against</h2>
                            {weakAgainst && <StrengthInfo strengthAgainst={weakAgainst} strengthType={"weak"} />}
                        </div>
                        <div className={styles.strengthAgainst}>
                            <h2>Neutral Against</h2>
                            {neutralAgainst && <StrengthInfo strengthAgainst={neutralAgainst} strengthType={"weak"} />}
                        </div>
                    </div>
                </article>
                <hr />
                <article className={styles.moves}>
                    <h2>Moves</h2>
                    <p>Here's a list of some moves that the Pokémon can naturally perform or learn to.</p>
                    {movesInfo && movesInfo.map(({ moveAccuracy, movePower, moveName, moveDescription }) => {
                        return (<PokemonMove key={moveName} moveAccuracy={moveAccuracy} movePower={movePower}
                            moveName={moveName} moveDescription={moveDescription} />);
                    })}
                </article>
                <hr />
                <article className={styles.abilityInfo}>
                    <div className={styles.abilityInfoWrapper}>
                        <h2>Ability Info</h2>
                        {abilityInfo && abilityInfo.map(({ abilityName, abilityDescription }) => {
                            return (<AbilityInfo key={abilityName} abilityName={abilityName} abilityDescription={abilityDescription} />)
                        })}
                    </div>
                </article>
                <hr />
                <article className={styles.additionalInfo}>
                    <h2>Additional Information</h2>
                    <p>Weight: {weight} kg</p>
                    <p>Height: {height} dm</p>
                    <p>Color: {color_name}</p>
                    <p>Capture Rate: {capture_rate}%</p>
                </article>
            </div>
        </section>
    );

}

export default PokemonPage;