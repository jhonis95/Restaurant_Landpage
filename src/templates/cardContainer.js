import React, { useEffect, useState } from "react";
import * as styles from "../components/index.module.css"
import { v4 as uuidv4 } from 'uuid';
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql,useStaticQuery } from "gatsby"

function CardDesktop({name,description,price,image}){
    const img=getImage(image.childrenImageSharp[0].gatsbyImageData)
    return(
        <section className={styles.card__Container}>
            <GatsbyImage 
                image={img} 
                alt={name+' image'}
                layout={"fullWidth"}
                placeholder={"blurred"}
                // style={{width:'100%',height:'100%'}}
            />
            <div className={styles.card__text__container}>
                <h3 className={styles.card__dish__name}>{name}</h3>
                <p className={styles.card__dish__description}>{description}</p>
                <p className={styles.card__dish__price}>{price}</p>
            </div>
        </section>
    )
}
function CardMobile({name,description,price,image}){
    const img=getImage(image.childrenImageSharp[0].gatsbyImageData)
    return(
        <section className={styles.card__Container}>
            <GatsbyImage 
                image={img} 
                alt={name+' image'}
                layout={"fullWidth"}
                placeholder={"blurred"}
                style={{width:'100px',height:'100%'}}
            />
            <div className={styles.card__text__container}>
                <h3 className={styles.card__dish__name}>{name}</h3>
                <p className={styles.card__dish__description}>{description}</p>
                <p className={styles.card__dish__price}>{price}</p>
            </div>
        </section>
    )
}
function CardContainer({activeMenuIs,device}){
  const query = useStaticQuery(graphql`
  query MyQuery2 {
    data {
      restaurant {
        menu {
          appetizer {
            name
            image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
            price
            descriprion
          }
          bowls {
            descriprion
            name
            price
            image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
          curry {
            descriprion
            name
            price
            image
          }
          dessert {
            descriprion
            name
            price
            image
          }
          drinks {
            descriprion
            name
            price
            image
          }
        }
      }
    }
  }
`)
 const [dishes,setDishes]=useState([])
 useEffect(()=>{
   switch(activeMenuIs){
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
 },[])
    return(
        <section className={styles.menu__appatizer__container}>
            {
                dishes.map((appetizer)=>{
                    return(
                        device.device=='desktop'?
                        <CardDesktop 
                            name={appetizer.name+ ' desktop'}
                            description={appetizer.descriprion}
                            price={appetizer.price}
                            image={appetizer.image}
                            key={uuidv4}
                        />:
                        <CardMobile
                            name={appetizer.name+ ' mobile'}
                            description={appetizer.descriprion}
                            price={appetizer.price}
                            image={appetizer.image}
                            key={uuidv4}
                        />
                    )
                })
            }
        </section>
    )
}
export default CardContainer;