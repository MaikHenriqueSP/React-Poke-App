import React from "react";
import { PokemonMove, Type } from "./../index";
import styles from "./PokemonPage.module.scss";
import useIndividualData from "./../../hooks/useIndividualData";

const PokemonPage = (props) => {
    const { location: { state: { front_default, name } } } = props;
    const { generalInfo, speciesInfo } = useIndividualData(name);
    const { capture_rate, color_name, evolves_from_name, evolves_to_name, speciesDescription } = speciesInfo;
    const { abilityInfo, weight, height, movesInfo, strengthsInfo, pokeOwnTypes } = generalInfo;
    const { strongAgainst, weakAgainst, neutralAgainst } = strengthsInfo || {};

    return (
        <section className={styles.pokePageSection}>
            <div className={styles.pokePageContainer}>
                <article className={styles.profile}>
                    <div className={styles.profileAvatarContainer}>
                        <div className={styles.profileAvatar}>
                            <img src={front_default} alt="Pokémon Profile" />
                        </div>
                        <h3>{name}</h3>
                    </div>
                    <div className={styles.basicInfoContainer}>
                        <div className={styles.basicInfoDescription}>
                            <h2>Description</h2>
                            <p>{speciesDescription}</p>
                        </div>
                        <div className={styles.basicInfoEvolutionChain}>
                            <h2>Evolution Chain</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nostrum voluptate assumenda sint veniam mollitia.</p>
                        </div>
                        <div className="pokeType">
                            <h2>Type(s)</h2>
                            {pokeOwnTypes && pokeOwnTypes.map(pokeOwnType => <Type key={pokeOwnType} typeName={pokeOwnType} />)}
                        </div>
                    </div>
                </article>
                <hr />
                <article className={styles.strengths}>
                    <div className={styles.strengthsContainer}>
                        <div className={styles.strengthAgainst}>
                            <h2>Strong Against</h2>
                            <div className={styles.strengthWrapper}>
                                {strongAgainst && strongAgainst.length !== 0 ?
                                    strongAgainst.map(agaisntType => <Type key={agaisntType} typeName={agaisntType} />)
                                    : <p>This pokemon is not naturally strong agaisnt any type.</p>}
                            </div>
                        </div>
                        <div className={styles.strengthAgainst}>
                            <h2>Weak Against</h2>
                            <div className={styles.strengthWrapper}>
                                {weakAgainst && strongAgainst.length !== 0 ?
                                    weakAgainst && weakAgainst.map(agaisntType => <Type key={agaisntType} typeName={agaisntType} />)
                                    : <p>This pokemon is not naturally weak agaisnt any type.</p>}
                            </div>
                        </div>
                        <div className={styles.strengthAgainst}>
                            <h2>Neutral Against</h2>
                            <div className={styles.strengthWrapper}>
                                {neutralAgainst && neutralAgainst.length !== 0 ?
                                    neutralAgainst.map(agaisntType => <Type key={agaisntType} typeName={agaisntType} />)
                                    : <p>This pokemon is not naturally neutral agaisnt any type.</p>}
                            </div>
                        </div>
                    </div>
                </article>
                <hr />
                <article className={styles.moves}>
                    <h2>Moves</h2>
                    <p>Here there's a list of some moves that the Pokémon can perform or learn to.</p>
                    {movesInfo && movesInfo.map(({ moveAccuracy, movePower, moveName, moveDescription }) => {

                        return <PokemonMove key={moveName} moveAccuracy={moveAccuracy} movePower={movePower}
                            moveName={moveName} moveDescription={moveDescription} />;
                    })}
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