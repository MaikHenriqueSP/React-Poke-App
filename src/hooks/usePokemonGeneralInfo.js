import { useState, useEffect, useCallback } from "react";

const usePokemonGeneralInfo = (name) => {
    const [generalInfo, setGeneralInfo] = useState([{}]);
    const pokeInfoURL = `https://pokeapi.co/api/v2/pokemon/${name}`;

    const mapAbilityInfo = useCallback((abilities) => {
        return Promise.all(abilities.map(async ({ ability: { name: abilityName, url } }) => {
            const responseAbilityFetch = await fetch(url);
            const { effect_entries } = await responseAbilityFetch.json();
            const abilityDescription = effect_entries[1].effect;
            return { abilityName, abilityDescription };
        }));
    }, []);

    const mapStrengthsInfo = useCallback((types) => {
        return Promise.all(types.map(async ({ type: { name: typeName, url } }) => {
            const responseTypeFetch = await fetch(url);
            const { damage_relations: { double_damage_from, double_damage_to, half_damage_from, half_damage_to,
                no_damage_from, no_damage_to } } = await responseTypeFetch.json();

            const doubleDamageToNames = double_damage_to.map(({ name }) => name);
            const halfDamageFromNames = half_damage_from.map(({ name }) => name);
            const doubleDamageFromNames = double_damage_from.map(({ name }) => name);
            const halfDamageToNames = half_damage_to.map(({ name }) => name);
            const noDamageFromNames = no_damage_from.map(({ name }) => name);
            const noDamageToNames = no_damage_to.map(({ name }) => name);

            const strongAgainst = [...doubleDamageToNames, ...halfDamageFromNames];
            const weakAgainst = [...doubleDamageFromNames, ...halfDamageToNames];
            const neutralAgainst = [...noDamageFromNames, ...noDamageToNames];

            return { strongAgainst, weakAgainst, neutralAgainst };
        }));
    }, []);

    const reduceToUniqueStrengthsNames = useCallback((strengthsInfo) => {
        return strengthsInfo.reduce((acc, { strongAgainst, weakAgainst, neutralAgainst }) => {
            if (!acc["strongAgainst"]) {
                acc["strongAgainst"] = [];
                acc["weakAgainst"] = [];
                acc["neutralAgainst"] = [];
            }
            acc["strongAgainst"] = [...new Set([...acc["strongAgainst"], ...strongAgainst])];
            acc["weakAgainst"] = [...new Set([...acc["weakAgainst"], ...weakAgainst])];
            acc["neutralAgainst"] = [...new Set([...acc["neutralAgainst"], ...neutralAgainst])];

            return acc;
        }, {});
    }, []);

    const mapMovesInfo = useCallback((moves) => {
        return Promise.all(moves.slice(0, 10).map(async ({ move: { name: moveName, url } }) => {
            const response = await fetch(url);
            const { accuracy: moveAccuracy, power: movePower, flavor_text_entries } = await response.json();
            const moveDescription = flavor_text_entries[6].flavor_text;
            return { moveAccuracy, movePower, moveName, moveDescription };
        }));
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(pokeInfoURL);
            const data = await response.json();
            const { weight, height, abilities, moves, types } = data;

            const pokeOwnTypes = types.map(({ type: { name } }) => name);
            const abilityInfo = await mapAbilityInfo(abilities);
            const mappedStrengthsInfo = await mapStrengthsInfo(types);
            const strengthsInfo = reduceToUniqueStrengthsNames(mappedStrengthsInfo);
            const movesInfo = await mapMovesInfo(moves);

            setGeneralInfo({
                abilityInfo,
                weight,
                height,
                movesInfo,
                strengthsInfo,
                pokeOwnTypes
            }
            );
        };
        fetchData();
    }, [pokeInfoURL, name, mapAbilityInfo, mapStrengthsInfo, reduceToUniqueStrengthsNames, mapMovesInfo]);


    return { generalInfo };
}

export default usePokemonGeneralInfo;