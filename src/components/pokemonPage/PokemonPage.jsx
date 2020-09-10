import React from "react";
import { StatBar } from "./../index";
import styles from "./PokemonPage.module.scss";
import useIndividualData from "./../../hooks/useIndividualData";

const PokemonPage = (props) => {
    const { location: { state: { front_default, name } } } = props;
    const { generalInfo, speciesInfo } = useIndividualData(name);
    const { capture_rate, color_name, evolves_from_name, evolves_to_name } = speciesInfo;
    const { abilityInfo, weight, height, movesInfo, strengthsInfo } = generalInfo;

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
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nostrum voluptate assumenda sint veniam mollitia.</p>
                        </div>
                        <div className={styles.basicInfoEvolutionChain}>
                            <h2>Evolution Chain</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nostrum voluptate assumenda sint veniam mollitia.</p>
                        </div>
                        <div className="pokeType">
                            <h2>Type</h2>
                            <div className={styles.pokeType}>
                                <div>
                                    <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                                    <h4>Normal</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <hr />
                <article className={styles.strengths}>
                    <div className={styles.strengthsContainer}>
                        <div className={styles.strengthAgainst}>
                            <h2>Strong Against</h2>
                            <p>This pokemon is not naturally strong agaisnt any type</p>
                        </div>
                        <div className={styles.strengthAgainst}>
                            <h2>Strong Against</h2>
                            <div className={styles.pokeType}>
                                <div>
                                    <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                                    <h4>Normal</h4>
                                </div>
                            </div>
                            <div className={styles.pokeType}>
                                <div>
                                    <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                                    <h4>Normal</h4>
                                </div>
                            </div>
                            <div className={styles.pokeType}>
                                <div>
                                    <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                                    <h4>Normal</h4>
                                </div>
                            </div>
                        </div>
                        <div className={styles.strengthAgainst}>
                            <h2>Weak Against</h2>
                            <div className={styles.pokeType}>
                                <div>
                                    <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                                    <h4>Normal</h4>
                                </div>
                            </div>
                            <div className={styles.pokeType}>
                                <div>
                                    <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                                    <h4>Normal</h4>
                                </div>
                            </div>
                            <div className={styles.pokeType}>
                                <div>
                                    <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                                    <h4>Normal</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <hr />
                <article className={styles.moves}>
                    <h2>Moves</h2>
                    <p>Here there's a list of some moves that the Pokémon can perform or learn to.</p>
                    <div className={styles.movesMoveContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eaque, neque iure animi qui sunt!</p>
                        <div className={styles.movesMoveStatsBarContainer}>
                            <div className={styles.movesMoveStatsBar}>
                                <p>Power</p>
                                <StatBar baseStat={100} statName={"power"} />
                            </div>
                            <div className={styles.movesMoveStatsBar}>
                                <p>Accuracy</p>
                                <StatBar baseStat={100} statName={"accuracy"} />
                            </div>
                        </div>
                    </div>
                </article>
                <hr />
                <article className={styles.additionalInfo}>
                    <h2>Additional Information</h2>
                    <p>Weight: <span>35</span>kg</p>
                    <p>Height: <span>1</span>m</p>
                    <p>Color: <span>Pink</span></p>
                </article>
            </div>
        </section>
    );

}

export default PokemonPage;