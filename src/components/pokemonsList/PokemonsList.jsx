import React, { useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import { PokemonCard } from "./../index";
import useData from "./../../hooks/useData";
import styles from "./PokemonList.module.scss";
import { Link } from "react-router-dom";

const PokemonsList = () => {
    const [offset, setOffset] = useState("1");
    const { hasNext, pokeInfo, isLoading } = useData(offset);

    const observer = useRef();
    const lastObservablePokeCard = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasNext) {
                setOffset(prevOffSet => parseInt(prevOffSet) + 20 + "");
            }
        });

        const DOMElement = ReactDOM.findDOMNode(node);
        if (DOMElement) observer.current.observe(DOMElement);

    }, [hasNext, isLoading]);

    return (
        <section>
            <div className={styles.pokemonListContainer}>
                {pokeInfo.map(({ name, stats, front_default }, index) => {
                    if (!name) {
                        return null;
                    }

                    if (index === pokeInfo.length - 1) {
                        return (
                            <Link to={{
                                pathname: `/list/${name}`,
                                state: { name }
                            }} key={name} className={styles.pokemonPageLink}>
                                <PokemonCard ref={lastObservablePokeCard} key={index} pokeName={name} pokeStats={stats} pokePictureUrl={front_default} />
                            </Link >
                        );
                    };

                    return (
                        <Link to={{
                            pathname: `/list/${name}`,
                            state: { name }
                        }} key={name} className={styles.pokemonPageLink}>
                            <PokemonCard key={index} pokeName={name} pokeStats={stats} pokePictureUrl={front_default} />
                        </Link>
                    );
                })}
            </div>
            <div className={styles.loadingSpinnerContainer}>
                {isLoading && (<div className={styles.loadingSpinner}></div>)}
            </div>
        </section >
    );

}

export default PokemonsList;