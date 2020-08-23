import React  from "react";
import styles from "./Home.module.scss";
import pikachuBrand from "./../../img/pikachu-removebg-preview.png";

const Home = () => {

    return (
        <section className={styles.mainContentSection}>
            <div className={styles.mainContentContainer}>
                <img src={pikachuBrand} alt="Pikachu waving hand" />
                <div className={styles.mainContentText}>
                    <h2>All Pokemons In One Place</h2>
                    <p>Find status, moves and everything you want to know about your favorites pokemons.</p>
                </div>
            </div>
        </section>
    );
}

export default Home;