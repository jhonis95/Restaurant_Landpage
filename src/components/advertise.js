import { graphql,useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import * as styles from "../components/index.module.css"

function Advertise(){
    const data=useStaticQuery(graphql`
    query MyQuery {
        data {
          restaurant {
            specialCard {
              descripiton
              subtitle
              title
              days
              menu {
                dish
                dishPrice
                plate
                platePrice
              }
              image {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    `)
    const img=data.data.restaurant.specialCard.image.childrenImageSharp[0].gatsbyImageData;
    return(
        <section className={styles.advertiseLayout_Conainer}>
            <section className={styles.advertiseText_container_one}>
                <div>
                    <h4 className={styles.advertiseText}>{data.data.restaurant.specialCard.title}</h4>
                    <h2 className={styles.advertiseText_subText}>{data.data.restaurant.specialCard.subtitle}</h2>
                </div>
                <div>
                    <p className={styles.advertiseText_dafault}>{data.data.restaurant.specialCard.descripiton}</p>
                    <p className={styles.advertiseText_dafault}>{data.data.restaurant.specialCard.days}</p>
                </div>
            </section>
            <section className={styles.advertiseText_container_two}>
                <div>
                    <p className={styles.advertiseText_dafault_two}>{data.data.restaurant.specialCard.menu.dish}</p>
                    <p className={styles.advertiseText_dafault_two}>{data.data.restaurant.specialCard.menu.plate}</p>
                </div>
                <div>
                    <p className={styles.advertiseText_dafault_two}>{data.data.restaurant.specialCard.menu.dishPrice}</p>
                    <p className={styles.advertiseText_dafault_two}>{data.data.restaurant.specialCard.menu.platePrice}</p>
                </div>
            </section>
            <div>
                <GatsbyImage
                    image={img}
                    alt={'Onigiri-image'}
                    placeholder={"blurred"}
                />
            </div>
        </section>
    )
}
export default Advertise