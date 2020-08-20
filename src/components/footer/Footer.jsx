import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerRectangle}>
               <h3>This site is just a sample built for learning purposes</h3> 
               <h3>Data provided by <a href="https://pokeapi.co">Poke API</a></h3>
            </div>
        </footer>
    );
}

export default Footer;