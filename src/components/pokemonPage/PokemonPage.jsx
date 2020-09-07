import React from "react";
import styles from "./PokemonPage.module.scss";

const PokemonPage = (props) => {

    return (
        <section className={styles.pokePageSection}>
            <div className={styles.pokePageContainer}>
                <article className={styles.profile}>   
                    <div className={styles.profileAvatarContainer}> 
                        <div className={styles.profileAvatar}> 
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" alt="Pokémon Profile Picture" />
                        </div>
                        <h3>Ditto</h3>
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
                                <div>
                                    <p>Bar</p>
                                </div>
                            </div>
                            <div className={styles.movesMoveStatsBar}> 
                                <p>Accuracy</p>
                                <div>
                                    <p>Bar</p>
                                </div>
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