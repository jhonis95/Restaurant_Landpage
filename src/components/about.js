import React, { useState,useEffect } from "react";
import data from "../data.json"
import * as styles from "./index.module.css"

function About(){
    const [device,setDevice]=useState('');

    useEffect(()=>{
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    })
    function updateMedia(){
        if(window.innerWidth<=828){
            setDevice('mobile')
        }else{
            setDevice('desktop')
        }
    }
    return(
        <>
            <h2 id="about" className={styles.subMenu}>About</h2>
            <div className={styles.about__content__container}>
                <div className={styles.about__text__container}>
                    <h3>{data.restaurant.name}</h3>
                    <p>{data.restaurant.about}</p>
                </div>
                {
                    device=='mobile'?
                        <img style={{maxWidth:'400px'}} src={data.restaurant.about_images.mobile} alt="outside pic" />:
                        <img style={{maxWidth:'32.4375rem',maxHeight:'42.9375rem'}} src={data.restaurant.about_images.desktop} alt="backyard pic" />
                }

            </div>
        </>
    )
}

export default About