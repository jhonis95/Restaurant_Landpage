import React from "react";
import data from "../data.json"
import * as styles from "./index.module.css"

function Gallery(){
    const images=data.restaurant.gallery.images
    return(
        <>
            <div>
                <h2 className={styles.subMenu}>Gallery</h2>
            </div>
            <div className={styles.gallery__img__container}>
                <img style={{gridArea:'pic1'}} src={images[0]} alt="dish pic" />
                <img style={{gridArea:'pic2'}} src={images[1]} alt="inside pic" />
                <img style={{gridArea:'pic3'}} src={images[2]} alt="coffee pic" />
                <img style={{gridArea:'pic4'}} src={images[3]} alt="smooth pic" />
            </div>
        </>
    )
}

export default Gallery