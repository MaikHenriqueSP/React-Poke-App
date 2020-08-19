import React from "react";
import logo from "./../../img/poke-logo.jpg";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <img src={logo} alt="Logo of the site which is a pokeball" className={styles.navbarLogo} />
                    <h1 className={styles.navbarTitle}>Find Your Favorite Pokémons Here</h1>
                </div>
                <ul className={styles.navbarList}>
                    <li>Home</li>
                    <li>Poké List</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;