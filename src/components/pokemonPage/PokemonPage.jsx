import React from "react";


const PokemonPage = (props) => {

    return (
        <h1>{props.location.state.name}</h1>
    );

}

export default PokemonPage;