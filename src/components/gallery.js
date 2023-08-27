import React from "react";
import * as styles from "./index.module.css"
import { StaticImage } from "gatsby-plugin-image"

function Gallery(){
    return(
        <>
            <div>
                <h2 className={styles.subMenu}>Gallery</h2>
            </div>
            <div className={styles.gallery__img__container}>
                <StaticImage style={{gridArea:'pic1'}} src="../images/gallery/dish_picture.png"  alt="dish pic" />
                <StaticImage style={{gridArea:'pic2'}} src="../images/gallery/inside_picture.png" alt="inside pic" />
                <StaticImage style={{gridArea:'pic3'}} src="../images/gallery/coffee_picture.png" alt="coffee pic" />
                <StaticImage style={{gridArea:'pic4'}} src="../images/gallery/smooth_picture.png" alt="smooth pic" />
            </div>
        </>
    )
}

export default Gallery