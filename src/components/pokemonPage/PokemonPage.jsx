import React from "react";


const PokemonPage = (props) => {

    return (
        <section className="pokePageContainer">
            <article className="pokePageProfileContainer">
                <div className="pokePageProfile">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" />
                    <h3>Ditto</h3>
                </div>
                <div className="pokePageBasicInfo">
                    <div className="pokePageBasicInfoDescription">
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nostrum voluptate assumenda sint veniam mollitia.</p>
                    </div>
                    <div className="pokePageBasicInfoEvolutionChain">
                        <h2>Evolution Chain</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nostrum voluptate assumenda sint veniam mollitia.</p>
                    </div>
                    <div className="pokePageBasicInfoType">
                        <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                        <h3>Normal</h3>
                    </div>
                </div>
            </article>
            <hr />
            <article className="pokePageStrengths">
                <div className="pokePageStrengthsStrongAgainst">
                    <h2>Strong Against</h2>
                    <p>This pokemon is not naturally strong agaisnt any type</p>
                </div>
                <div className="pokePageStrengthsWeakAgainst">
                    <h2>Strong Against</h2>
                    <div className="pokePageStrengthBasicInfoType">
                        <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                        <h3>Normal</h3>
                    </div>
                    <div className="pokePageStrengthBasicInfoType">
                        <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                        <h3>Normal</h3>
                    </div>
                    <div className="pokePageStrengthBasicInfoType">
                        <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                        <h3>Normal</h3>
                    </div>
                </div>
                <div className="pokePageStrengthsNeutralAgainst">
                    <h2>Weak Against</h2>
                    <div className="pokePageStrengthBasicInfoType">
                        <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                        <h3>Normal</h3>
                    </div>
                    <div className="pokePageStrengthBasicInfoType">
                        <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                        <h3>Normal</h3>
                    </div>
                    <div className="pokePageStrengthBasicInfoType">
                        <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                        <h3>Normal</h3>
                    </div>
                </div>
            </article>
            <hr />
            <article className="pokePageMoves">
                <h2>Moves</h2>
                <p>Here there's a list of some moves that the Pokémon can perform or learn to.</p>
                <div className="pokePageMovesMove">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eaque, neque iure animi qui sunt!</p>
                    <div className="pokePageMovesMoveBarContainer">
                        <div className="pokePageMovesMoveBar">
                            <p>Power</p>
                            <div>
                                <p>Bar</p>
                            </div>
                        </div>
                        <div className="pokePageMovesMoveBar">
                            <p>Accuracy</p>
                            <div>
                                <p>Bar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <hr/>
            <article className="pokePageMoves">
                <h2>Additional Information</h2>
                <p>Weight: <span>35</span>kg</p>
                <p>Height: <span>1</span>m</p>
                <p>Color: <span>Pink</span></p>
            </article>
        </section>
    );

}

export default PokemonPage;