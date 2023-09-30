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
            <section section className={styles.bubbleTeaContainer_content}>
            <h2 className={styles.bubbleTeaContainer_title} id="bubbleTea">{data.data.restaurant.bubbleTea.title}</h2>
            <GatsbyImage 
               image={background} 
               alt={'bubbeTea-image'}
               layout={"fullWidth"}
               placeholder={"blurred"}
               style={
                   {
                       opacity:'50%',
                       position:'absolute',
                       width:'100%',
                       height:'100%'
                   }
               }
            />
                <div className={styles.bubbleTeaContainer_two}>
                    <div>
                        <h4 className={styles.bubbleTeaText_subtitle}>{data.data.restaurant.bubbleTea.teas.title}</h4>
                        <ul >
                            {
                                data.data.restaurant.bubbleTea.teas.content.map((item)=>{
                                    return(
                                        <li  
                                            key={uuidv4()}
                                        >{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.bubbleTeaText_subtitle}>{data.data.restaurant.bubbleTea.juices.title}</h4>
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
                <div className={styles.bubbleTeaContainer_one}>
                    <div>
                        <h4 className={styles.bubbleTeaText_subtitle2}>{data.data.restaurant.bubbleTea.addOns.title}</h4>
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
                        <h4 className={styles.bubbleTeaText_subtitle2}>{data.data.restaurant.bubbleTea.milkSubstitutes.title}</h4>
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
                       style={
                        {
                            width:'300px',
                            height:'300px',
                            marginLeft:'15%'
                        }
                    }
                    />
                </div>
            </section>
        </>
    )
}

export default BubbleTea