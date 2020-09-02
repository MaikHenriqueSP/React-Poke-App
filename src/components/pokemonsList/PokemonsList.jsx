import React, { useEffect, useState } from "react";
import { PokemonCard } from "./../index";
import useData from "./../../hooks/useData";
import "./PokemonList.module.scss";

const PokemonsList = () => {
    const [offset, setOffset] = useState("1");
    const { hasNext, pokeInfo, isLoading } = useData(offset);

    return (
        <section>
            {pokeInfo.map(({ name, stats, front_default }, index) => (
                <PokemonCard key={index} pokeName={name} pokeStats={stats} pokePictureUrl={front_default} />
            ))}
            {isLoading && "Loading..."}
        </section>
    );

}

export default PokemonsList;