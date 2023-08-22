import React from "react";
import data from "../data.json"
import * as styles from "./index.module.css"

function Gallery(){
    const images=data.restaurant.gallery.images
    return(
        <>
            <div>
                <h3 className={styles.subMenu}>Gallery</h3>
            </div>
            <div className={styles.gallery__img__container}>
                <img style={{gridArea:'pic1'}} src={images[0]} alt="dish picture" />
                <img style={{gridArea:'pic2'}} src={images[1]} alt="inside picture" />
                <img style={{gridArea:'pic3'}} src={images[2]} alt="coffee picture" />
                <img style={{gridArea:'pic4'}} src={images[3]} alt="smooth picture" />
            </div>
        </>
    )
}

export default Gallery