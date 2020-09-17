import { useState, useEffect, useCallback } from "react";

const usePokemonSpeciesData = (name) => {
    const [speciesInfo, setSpeciesInfo] = useState([{}]);
    const specieInfoURL = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

    const mapEvolutionChain = useCallback((evolutionChainData) => {
        const { chain } = evolutionChainData;
        const { evolves_to } = chain;

        const evolutionChain = [chain.species.name];

        for (let i = 0; i < evolves_to.length; i++) {
            evolutionChain.push(evolves_to[i].species.name);
            for (let j = 0; j < evolves_to[i].evolves_to.length; j++) {
                evolutionChain.push(evolves_to[i].evolves_to[j].species.name);
            }
        }

        return evolutionChain;
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(specieInfoURL);
            const { capture_rate, color: { name: color_name }, evolution_chain: { url: evolution_chain_url },
                flavor_text_entries } = await response.json();

            const evolutionChainFetchResponse = await fetch(evolution_chain_url);
            const evolutionChainFetchData = await evolutionChainFetchResponse.json();
            const evolutionChain = mapEvolutionChain(evolutionChainFetchData);

            const speciesDescription = flavor_text_entries[6].flavor_text;

            setSpeciesInfo({
                capture_rate,
                color_name,
                evolutionChain,
                speciesDescription
            });
        };
        fetchData();
    }, [specieInfoURL, name, mapEvolutionChain]);

    return { speciesInfo };
}


export default usePokemonSpeciesData;