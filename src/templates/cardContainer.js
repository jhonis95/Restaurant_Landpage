import React, { useEffect, useState } from "react";
import * as styles from "../components/index.module.css"
import { v4 as uuidv4 } from 'uuid';
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql,useStaticQuery } from "gatsby"
function Card({name,description,price,image}){
    const img=getImage(image)
    return(
        <section className={styles.card__Container}>
            <GatsbyImage image={img} alt={name+' image'} />
            <div className={styles.card__text__container}>
                <h3 className={styles.card__dish__name}>{name}</h3>
                <p className={styles.card__dish__description}>{description}</p>
                <p className={styles.card__dish__price}>{price}</p>
            </div>
        </section>
    )
}

function CardContainer({activeMenu}){
  const query = useStaticQuery(graphql`
  query MyQuery {
    data {
      restaurant {
        menu {
          appetizer {
            price
            name
            image
            descriprion
          }
          bowls {
            price
            name
            image
            descriprion
          }
          curry {
            price
            name
            image
            descriprion
          }
          dessert {
            name
            price
            image
            descriprion
          }
          drinks {
            price
            name
            image
            descriprion
          }
        }
      }
    }
  }
`)
 const [dishes,setDishes]=useState([])
 useEffect(()=>{
   switch(activeMenu){
       case "appetizer":
          setDishes(query.data.restaurant.menu[0].appetizer)
          break;
       case "curry":
          setDishes(query.data.restaurant.menu[1].curry)
          break;
       case "bowls":
          setDishes(query.data.restaurant.menu[2].bowls)
          break;
       case "drinks":
          setDishes(query.data.restaurant.menu[3].drinks)
          break;
       case "dessert":
          setDishes(query.data.restaurant.menu[4].dessert)
          break;
       default:
           break;
   }
 })
    return(
        <section className={styles.menu__appatizer__container}>
            {
                dishes.map((appetizer)=>{
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
export default CardContainer;
// function Card(){
//     const{allFile} =useStaticQuery(graphql`
//     query {
//       allFile(filter: {id: {eq: "5e61f6a4-c59f-57f5-975f-b1fc97c312b6"}}) {
//         nodes {
//           name
//         }
//       }
//     }
//   `)
//     console.log(allFile.nodes.name)
//     return(
//         <p>test</p>
//     )
// }
// function CardContainer(){
//     return(
//         <section className={styles.menu__appatizer__container}>
//             {/* {
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
//             } */}
//             <Card/>
//         </section>
//     )
// }
// export default CardContainer
// import { graphql,useStaticQuery } from "gatsby"
// import React from "react"
// // import { GatsbyImage, getImage } from "gatsby-plugin-image"

// function CardContainer() {
//     const data = useStaticQuery(graphql`
//     query MyQuery {
//       data {
//         restaurant {
//           about
//         }
//       }
//     }
// `)
// //   console.log(typeof(data.restaurant.about))
//   console.log(data)
//   return (
//     <section>
//         <p>test</p>
//       {/* <GatsbyImage image={getImage(data)} alt={data.allFiles.nodes[0].name} /> */}
//       {/* <p>{data.restaurant.about}</p> */}
//     </section>
//   )
// }
// export default CardContainer