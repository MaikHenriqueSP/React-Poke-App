import { useState, useEffect } from "react";

const useIndividualData = (name) => {
    const [speciesInfo, setSpeciesInfo] = useState([{}]);
    const [generalInfo, setGeneralInfo] = useState([{}]);

    const specieInfoURL = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
    const pokeInfoURL = `https://pokeapi.co/api/v2/pokemon/${name}`;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(specieInfoURL);
            const data = await response.json();

            const { capture_rate, color: { name: color_name }, evolution_chain: { url: evolution_chain_url },
                evolves_from_species } = data;
            const evolves_from_name = (evolves_from_species) ? evolves_from_species.name : "";

            const evolutionChainFetchResponse = await fetch(evolution_chain_url);
            const evolutionChainFetchData = await evolutionChainFetchResponse.json();

            const { chain: { evolves_to } } = evolutionChainFetchData
            const evolves_to_name = evolves_to[0].evolves_to[0].species.name || "";

            setSpeciesInfo({
                capture_rate,
                color_name,
                evolves_from_name,
                evolves_to_name
            });

        }
        fetchData();

    }, [name]);

    useEffect(() => {

    }, [name]);

    return { speciesInfo, generalInfo };
}


export default useIndividualData;