import React from "react";
import pikachuBrand from "./../../img/pikachu-removebg-preview.png";
import vector from "./../../img/vector-main-page.png";
import styles from "./Main.module.scss";

const Main = () => {
    return (
        <main>
            <section className={styles.mainContentSection}>
                <div className={styles.mainContentContainer}>
                    <img src={pikachuBrand} alt="Pikachu waving hand" />
                    <div className={styles.mainContentText}>
                        <h2>All Pokemons In One Place</h2>
                        <p>Find status, moves and everything you want to know about your favorite pokemons.</p>
                    </div>
                </div>
                <img src={vector} alt="Wave effect in green" className={styles.vectorStyle} />
            </section>

        </main>
    );

}

export default Main;