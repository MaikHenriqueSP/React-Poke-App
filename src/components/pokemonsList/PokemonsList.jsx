import React, { useEffect, useState } from "react";
import { PokemonCard } from "./../index";
import { fetchData } from "./../../api/index";
import "./PokemonList.module.scss";

const PokemonsList = () => {
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        const fetchPokeList = async () => {
            setPokeList(await fetchData());
        }

        fetchPokeList();
    }, [setPokeList]);

    return (
        <section>
            {pokeList.map((poke) => (
                <PokemonCard key={poke.pokeName} pokeName={poke.pokeName} pokeStats={poke.pokeStats} pokePictureUrl={poke.pokePictureUrl} />
            ))}
        </section>
    );

}

export default PokemonsList;