import React from "react";
import * as styles from "./index.module.css"
import data from "../data.json"
import { v4 as uuidv4 } from 'uuid';
function Card({name,description,price,image}){
    // import img from {image}
    return(
        <section className={styles.card__Container}>
            <img src={image} alt={name+' image'} />
            <div className={styles.card__text__container}>
                <h3 className={styles.card__dish__name}>{name}</h3>
                <p className={styles.card__dish__description}>{description}</p>
                <p className={styles.card__dish__price}>{price}</p>
            </div>
        </section>
    )
}

function Appetizers(){
    const appetizers=data.restaurant.menu[0].Appetizer
    return(
        <section className={styles.menu__appatizer__container}>
            {
                appetizers.map((appetizer)=>{
                    return(
                        <Card 
                            image={appetizer.image}
                            name={appetizer.name}
                            description={appetizer.descriprion}
                            price={appetizer.price}
                            key={uuidv4()}
                        />
                    )
                })
            }
        </section>
    )
}
export default Appetizers
