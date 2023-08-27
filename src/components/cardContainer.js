import React from "react";
import * as styles from "./index.module.css"
import data from "../data.json"
// import { v4 as uuidv4 } from 'uuid';
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export const pageQuery=graphql`
    query MyQuery {
        allImageSharp {
          nodes {
            fixed {
              src
              originalName
            }
          }
        }
      }
`
// function Card({name,description,price,image},{data}){
//     console.log(image)
//     return(
//         <section className={styles.card__Container}>
//             <GatsbyImage src={getImage(data.node)} alt={name+' image'} />
//             <div className={styles.card__text__container}>
//                 <h3 className={styles.card__dish__name}>{name}</h3>
//                 <p className={styles.card__dish__description}>{description}</p>
//                 <p className={styles.card__dish__price}>{price}</p>
//             </div>
//         </section>
//     )
// }

// function CardContainer({activeMenu}){
//     let appetizers;
//     switch(activeMenu){
//         case "Appetizer":
//             appetizers=data.restaurant.menu[0].Appetizer;
//             break;
//         case "Curry":
//             appetizers=data.restaurant.menu[1].Curry;
//             break;
//         case "Bowls":
//             appetizers=data.restaurant.menu[2].Bowls;
//             break;
//         case "Drinks":
//             appetizers=data.restaurant.menu[3].Drinks;
//             break;
//         case "Dessert":
//             appetizers=data.restaurant.menu[4].Dessert;
//             break;
//         default:
//             break;
//     }
//     return(
//         <section className={styles.menu__appatizer__container}>
//             {
//                 appetizers.map((appetizer)=>{
//                     return(
//                         <Card 
//                             image={appetizer.image}
//                             name={appetizer.name}
//                             description={appetizer.descriprion}
//                             price={appetizer.price}
//                             key={uuidv4()}
//                         />
//                     )
//                 })
//             }
//         </section>
//     )
// }
// function Card({data}){
//     <GatsbyImage src={getImage(data.allImageSharp.node[0].childrenImageSharp[0])}/>
// }
function CardContainer(){
    return(
        <section className={styles.menu__appatizer__container}>
            {/* {
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
            } */}
            {/* <Card/> */}
        </section>
    )
}
export default CardContainer
