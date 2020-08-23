import React from "react";
import logo from "./../../img/poke-logo.jpg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <img src={logo} alt="Logo of the site which is a pokeball" className={styles.navbarLogo} />
                    <h1 className={styles.navbarTitle}>Find Your Favorites Pokémons Here</h1>
                </div>
                <ul className={styles.navbarList}>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/test">
                        <li>Poké List</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;