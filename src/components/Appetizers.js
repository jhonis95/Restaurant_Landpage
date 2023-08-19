import React from "react";
import * as styles from "./index.module.css"
import data from "../data.json"
import { v4 as uuidv4 } from 'uuid';

function Card({name,description,price,image}){
    return(
        <div>
            <img src={image} alt={name+' image'} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
        </div>
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