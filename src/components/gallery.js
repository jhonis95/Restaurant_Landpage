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
                <img style={{gridArea:'1 / 1 / 3 / 2',alignSelf: 'center'}} src={images[0]} alt="dish picture" />
                <img style={{gridArea:'1 / 2 / 2 / 3',alignSelf: 'center'}} src={images[1]} alt="inside picture" />
                <img style={{gridArea:'2 / 2 / 3 / 3',alignSelf: 'center'}} src={images[2]} alt="coffee picture" />
                <img style={{gridArea:'1 / 3 / 3 / 4',alignSelf: 'center'}} src={images[3]} alt="smooth picture" />
            </div>
        </>
    )
}

export default Gallery