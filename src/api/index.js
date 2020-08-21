const rootUrl = "https://pokeapi.co/api/v2/pokemon/";

export const fetchData = async () => {
    const response = await fetch(rootUrl);
    const { results } = await response.json();


    const pokeInfo = await Promise.all(results.map(async (result) => {
        const res = await fetch(result.url);
        const data = await res.json();

        const pokeName = result.name;
        const pokeStats = data.stats;
        const pokePictureUrl = data.sprites.other.dream_world.front_default;

        return { pokeName, pokeStats, pokePictureUrl };
    }));
    return pokeInfo;
}
