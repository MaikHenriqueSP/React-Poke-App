import { useEffect, useState } from "react";

export default function useData(offset) {
    const [pokeInfo, setPokeInfo] = useState([{}]);
    const [hasNext, setHasNext] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const rootUrl = "https://pokeapi.co/api/v2/pokemon/?" + new URLSearchParams({ offset });
        setIsLoading(true);
        const fetchData = async () => {
            const response = await fetch(rootUrl);
            const { results, next } = await response.json();

            const pokeInfoResult = await Promise.all(results.map(async ({ name, url }) => {
                const resultResponse = await fetch(url);
                const pokeData = await resultResponse.json();

                const { stats, sprites: { other: { dream_world: { front_default } } } } = pokeData;

                return { name, stats, front_default };
            }))

            setPokeInfo(prevPokeInfo => [...new Set([...prevPokeInfo, ...pokeInfoResult])]);
            setHasNext(next !== null);
            setIsLoading(false);
        }

        fetchData();

    }, [offset]);

    return { hasNext, pokeInfo, isLoading };
}