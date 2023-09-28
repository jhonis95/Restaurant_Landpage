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
    },[])
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
  query MyQuery {
    data {
      restaurant {
        menu {
          appetizer {
            name
            price
            descriprion
            image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
          entrees {
            descriprion
            name
            price
            image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
          smoothies {
            descriprion
            name
            price
            image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
          lattes {
            descriprion
            name
            price
            image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
          coffee {
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
            image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
          sushi {
            descriprion
            name
            price
            image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`)
 const [dishes,setDishes]=useState([])
 useEffect(()=>{
  console.log(activeMenuIs)
  switch(activeMenuIs){
      case "Appetizer":
         setDishes(query.data.restaurant.menu[0].appetizer)
         break;
      case "Entrées":
         setDishes(query.data.restaurant.menu[1].entrees)
         break;
      case "Smoothies":
         setDishes(query.data.restaurant.menu[2].smoothies)
         break;
      case "Tea Latte":
         setDishes(query.data.restaurant.menu[3].lattes)
         break;
      case "Coffee":
         setDishes(query.data.restaurant.menu[4].coffee)
         break;
      case "Dessert":
        setDishes(query.data.restaurant.menu[5].dessert)
        break;
      case "Sushi Roll":
        setDishes(query.data.restaurant.menu[6].sushi)
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
                        name={appetizer.name}
                        description={appetizer.descriprion}
                        price={appetizer.price}
                        image={appetizer.image}
                        device={device}
                        key={uuidv4()}
                      />
                   )
                  })
            }
        </section>
    )
}
export default CardContainer;