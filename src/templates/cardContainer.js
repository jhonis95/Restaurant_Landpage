import React, { useEffect, useState } from "react";
import * as styles from "../components/index.module.css"
import { v4 as uuidv4 } from 'uuid';
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql,useStaticQuery } from "gatsby"

function Card({name,description,price,image,device}){
    const [img,setImg]=useState({})
    useEffect(()=>{
      console.log(image)
      setImg(getImage(image.childrenImageSharp[0].gatsbyImageData))
    })
    return(
        <section className={styles.card__Container}>
            {
              device.device==="mobile"?
              <GatsbyImage image={img} 
                alt={name+' image'}
                layout={"fullWidth"}
                placeholder={"blurred"}
                style={{width:'100px'}}
              />:
              <GatsbyImage image={img} 
                alt={name+' image'}
                layout={"fullWidth"}
                placeholder={"blurred"}
              />
            }
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
            image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
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
      case "entrees":
         setDishes(query.data.restaurant.menu[1].entrees)
         break;
      case "smoothies":
         setDishes(query.data.restaurant.menu[2].smoothies)
         break;
      case "latte":
         setDishes(query.data.restaurant.menu[3].latte)
         break;
      case "coffee":
         setDishes(query.data.restaurant.menu[4].coffee)
         break;
      case "dessert":
        setDishes(query.data.restaurant.menu[4].dessert)
        break;
      case "sushi":
        setDishes(query.data.restaurant.menu[4].sushi)
        break;
      case "sushi":
        setDishes(query.data.restaurant.menu[4].sushi)
        break;
      default:
        break;
  }
 })
function returnCards(){
 return(
   <Card
       name={appetizer.name}
       description={appetizer.descriprion}
       price={appetizer.price}
       image={appetizer.image}
       device={device}
       key={uuidv4()}
   />
  )
}
function returnLink(){
  return(
    // window.location.href = 'localhost:'
    console.log('go to bebble tea')
  )
}
    return(
        <section className={styles.menu__appatizer__container}>
            {
                dishes.map((appetizer)=>{
                    appetizer=='bubbleTea'?returnCards():returnLink()
                })
            }
        </section>
    )
}
export default CardContainer;