import { graphql, useStaticQuery } from "gatsby";
import { getImage,GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../components/index.module.css"
import { v4 as uuidv4 } from 'uuid';

function BubbleTea(){
    const data=useStaticQuery(graphql`
    query bubble {
        data {
          restaurant {
            bubbleTea {
              addOns {
                content
                title
              }
              juices {
                content
                title
              }
              milkSubstitutes {
                content
                title
              }
              teas {
                content
                title
              }
              title
              image {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
              background {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    `)
    const img=getImage(data.data.restaurant.bubbleTea.image.childrenImageSharp[0].gatsbyImageData);
    const background=getImage(data.data.restaurant.bubbleTea.background.childrenImageSharp[0].gatsbyImageData);
    return(
        <>
            <h2 className={styles.subMenu} id="bubbleTea">{data.data.restaurant.bubbleTea.title}</h2>
            <GatsbyImage 
               image={background} 
               alt={'bubbeTea-image'}
               layout={"fullWidth"}
               placeholder={"blurred"}
            />
            <div>
                <div>
                    <h4>{data.data.restaurant.bubbleTea.teas.title}</h4>
                    <ul >
                        {
                            data.data.restaurant.bubbleTea.teas.content.map((item)=>{
                                return(
                                    <li key={uuidv4()}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <h4>{data.data.restaurant.bubbleTea.juices.title}</h4>
                    <ul>
                        {
                            data.data.restaurant.bubbleTea.juices.content.map((item)=>{
                                return(
                                    <li key={uuidv4()}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h4>{data.data.restaurant.bubbleTea.addOns.title}</h4>
                    <ul>
                        {
                            data.data.restaurant.bubbleTea.addOns.content.map((item)=>{
                                return(
                                    <li key={uuidv4()}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <h4>{data.data.restaurant.bubbleTea.milkSubstitutes.title}</h4>
                    <ul>
                        {
                            data.data.restaurant.bubbleTea.milkSubstitutes.content.map((item)=>{
                                return(
                                    <li key={uuidv4()}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <GatsbyImage 
                   image={img} 
                   alt={'bubbeTea-image'}
                   layout={"fullWidth"}
                   placeholder={"blurred"}
                />
            </div>
        </>
    )
}

export default BubbleTea