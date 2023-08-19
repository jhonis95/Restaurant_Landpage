import React from "react";
import { Link } from "gatsby";
import * as styles from "../components/index.module.css"
import logo from "../images/logo.png"

const Navbar=()=>{
    return(
        <>  
            <img className={styles.navbar__logo} src={logo} alt="Curiosity by Intrinsic logo" />
            {/* import the class style globaly from index.module and passing to the component*/}
            <div className={styles.navbar__link}>
                <Link className={styles.link} to="#header">Home</Link>
                <Link className={styles.link} to="#menu">Menu</Link>
                <Link className={styles.link} to="#about">About</Link>
                <Link className={styles.link} to="#gallery">Gallery</Link>
            </div>
        </>
    )
}
export default Navbar;
