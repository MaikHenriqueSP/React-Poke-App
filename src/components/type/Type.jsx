import React from "react";
import styles from "./../pokemonPage/PokemonPage.module.scss";

const Type = ({ typeName }) => {
    return (
        <div className={styles.pokeType}>
            <div>
                <img src="https://freestencilgallery.com/wp-content/uploads/2016/07/Pokemon-Normal-Type-Symbol-Stencil-thumb.jpg" alt="Type of pokemon: Normal" />
                <h4>{typeName}</h4>
            </div>
        </div>
    );

};

export default Type;