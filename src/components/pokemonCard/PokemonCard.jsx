import React from 'react';

const PokemonCard = ({ pokeName, pokeStats, pokePictureUrl }) => {

    return (
        <div>
            <h4>{pokeName}</h4>
            <img src={pokePictureUrl} alt={`Representation of ${pokeName}`}/>
        </div>
    );

}

export default PokemonCard;