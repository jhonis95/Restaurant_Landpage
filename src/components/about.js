import React from "react";
import data from "../content/data.json"
import * as styles from "./index.module.css"
import { StaticImage } from "gatsby-plugin-image"

function About(device){
    return(
        <>
            <h2 id="about" className={styles.subMenu}>About</h2>
            <div className={styles.about__content__container}>
                <div className={styles.about__text__container}>
                    <h3>{data.restaurant.name}</h3>
                    <p>{data.restaurant.about}</p>
                </div>
                {
                    device.device==='mobile'?
                        <StaticImage style={{maxWidth:'400px'}} src="../images/about/outside.png" alt="outside pic" />:
                        <StaticImage style={{maxWidth:'32.4375rem',maxHeight:'42.9375rem'}} src="../images/about/backyard.png" alt="backyard pic" />
                }

            </div>
        </>
    )
}

export default About