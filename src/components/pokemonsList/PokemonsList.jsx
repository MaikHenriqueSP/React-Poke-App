import React, { useEffect, useState } from "react";
import { PokemonCard } from "./../index";
import { fetchData } from "./../../api/index";

const PokemonsList = () => {
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        const fetchPokeList = async () => {
            setPokeList(await fetchData());
        }

        fetchPokeList();
        // console.log(pokeList);
    }, [setPokeList]);

    return (
        <section>
            {pokeList.map(poke => (
                <PokemonCard pokeName={poke.pokeName} pokeStats={poke.pokeStats} pokePictureUrl={poke.pokePictureUrl} />
            ))}

        </section>
    );

}

export default PokemonsList;